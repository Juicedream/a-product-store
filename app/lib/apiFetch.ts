import { ApiError, NetworkError } from "./error";
import { storage } from "./storage";

export async function apiFetch(endpoint: string, {method = 'GET', payload}: {method?: string; payload?: Record<string, unknown>} = {}) {
  const accessToken = storage.get('accessToken');
  let res: Response;
  try {
    res = await fetch("/api/proxy", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      endpoint,
      method,
      payload,
      accessToken
    })
  })
  } catch (error) {
    console.error("Network Error: ", error);
    throw new NetworkError();
  }
  
  if (res.status === 401) {
    // redirect to login if session is fully expired
    storage.remove("accessToken");
    window.location.href = '/login';
    return;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new ApiError(data?.message || "Something went wrong", res.status);
  }
  const result = await res.json();
  if (result.newAccessToken) {
    storage.set('accessToken', result.newAccessToken);
  }
  return result.data;
}
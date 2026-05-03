import { storage } from "./storage";

export async function apiFetch(endpoint: string, {method = 'GET', payload}: {method?: string; payload?: Record<string, unknown>} = {}) {
  const accessToken = storage.get('accessToken');
  const res = await fetch("/api/proxy", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      endpoint,
      method,
      payload,
      accessToken
    })
  })
  if (res.status === 401) {
    // redirect to login if session is fully expired
    window.location.href = '/login';
    return;
  }
  const result = await res.json();
  if (result.newAccessToken) {
    storage.set('accessToken', result.newAccessToken);
  }
  return result.data;
}
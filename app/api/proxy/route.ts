import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";

type BodyType = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  payload: Record<string, unknown>;
  accessToken: string;
};

async function fetchData({
  endpoint,
  method,
  accessToken,
  payload,
}: {
  endpoint: string;
  method: string;
  accessToken: string;
  payload: Record<string, unknown>;
}) {
  const response = await fetch(`${backendUrl}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: payload && method !== 'GET' ? JSON.stringify(payload) : undefined,
  });

  return response;
}

export async function POST(request: {
  json: () => Promise<Record<string, unknown>>;
}) {
  const body = await request.json();
  const { endpoint, method = "GET", payload, accessToken } = body as BodyType;
  // try the request with the current access token
  let response = await fetchData({ endpoint, method, accessToken, payload });

  if (response.status === 401 || response.status === 400) {
    const cookieStore = cookies();
    const refreshToken = (await cookieStore).get("refreshToken")?.value;
    if (!refreshToken) {
      return NextResponse.json(
        { error: "Session expired, please login again" },
        { status: 401 },
      );
    }

    // call the refresh token endpoint
    const refreshRes = await fetchData({
      endpoint: "/auth/refresh",
      method: "POST",
      payload: { refreshToken },
      accessToken,
    });
    if (!refreshRes.ok) {
      return NextResponse.json(
        {
          error: "Session expired, please login again",
        },
        {
          status: 401,
        },
      );
    }
    const { accessToken: newAccessToken } = await refreshRes.json();

    response = await fetchData({
      endpoint,
      method,
      accessToken: newAccessToken,
      payload,
    });
    const data = await response.json();

    // return the new access token to the client so it can update it
    return NextResponse.json({data, newAccessToken});
  }
  const data = await response.json();
  return NextResponse.json({data});
}

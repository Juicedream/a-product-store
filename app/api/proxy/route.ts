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
  try {
    
 
  const body = await request.json();
  const { endpoint, method = "GET", payload, accessToken } = body as BodyType;
  // try the request with the current access token
  let response: Response;

  try {
    response = await fetchData({ endpoint, method, accessToken, payload });
  } catch (error) {
    console.error("Backend server unreachable: ", error);
    return NextResponse.json({
      error: "Backend server is unreachable. Please try again later."
    }, {status: 503});
  }

  // if the accessToken is invalid, we wnat to get a new one with the refreshToken and retry the original request
  if (response.status === 401 || response.status === 400) {
    const cookieStore = cookies();
    const refreshToken = (await cookieStore).get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Session expired, please login again" },
        { status: 401 },
      );
    }

    // call the refresh token endpoint to get a new accessToken

    let refreshRes: Response;
    try {
       refreshRes = await fetchData({
      endpoint: "/auth/refresh",
      method: "POST",
      payload: { refreshToken },
      accessToken,
    });
    } catch (error) {
      console.error("Backend server unreachable: ", error);
      return NextResponse.json({
      error: "Backend server is unreachable. Please try again later."
    }, {status: 503});
    }
    
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

    // retry our initial request that needed the new accessToken since the previous was invalid and now gotten through our valid refreshToken
    try {
      response = await fetchData({
      endpoint,
      method,
      accessToken: newAccessToken,
      payload,
    });
    } catch (error) {
      console.error("Backend server unreachable: ", error);
      return NextResponse.json({
      error: "Backend server is unreachable. Please try again later."
    }, {status: 503});
    }

    // if successful
    const data = await response.json();
    // return the new access token to the client so it can update it
    return NextResponse.json({data, newAccessToken});
  }
  // if accessToken is valid and request is sent
  const data = await response.json();
  return NextResponse.json({data});

   } catch (error) {
     console.error("Proxy error: ", error); 
     return NextResponse.json({
      error: "An unexpected error occurred"
    }, {status: 500});
  }
}

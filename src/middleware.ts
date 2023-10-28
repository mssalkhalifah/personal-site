import { NextRequest, NextResponse } from "next/server";
import { IApiResponse } from "./utils/api";

export const config = {
  matcher: "/api/:function*",
};

export function middleware(request: NextRequest) {
  const response: IApiResponse = {
    status: 500,
  };

  try {
    if (request.nextUrl.pathname.indexOf("revalidate") >= 0) {
      const authHeader = request.headers.get("authorization");

      if (authHeader && authHeader.split(" ")[0] === "Bearer") {
        const token = authHeader.split(" ")[1];

        if (!token) {
          response.status = 400;
          response.message = "Must provide a token";
          return Response.json(response, { status: response.status });
        }

        if (token !== process.env.ON_DEMAND_REVALIDATION_TOKEN) {
          response.status = 401;
          response.message = "Invalid token";
          return Response.json(response, { status: response.status });
        }

        NextResponse.next();
      } else {
        response.status = 400;
        response.message = "Invalid header: Bearer <Token>";
        return Response.json(response, { status: response.status });
      }
    }
  } catch (error) {
    console.log(error);
    return Response.json(response, { status: response.status });
  }
}

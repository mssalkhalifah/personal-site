import { HttpStatus, apiHandler } from "@/utils/api";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return apiHandler(request, (logger) => {
    const tag = request.nextUrl.searchParams.get("tag");

    const childLogger = logger.child({ tag });

    if (!tag) {
      return { status: HttpStatus.BadRequest, message: "Tag is missing" };
    }

    childLogger.trace("revalidateTag called");
    revalidateTag(tag);
    childLogger.trace("revalidateTag completed");

    return {
      status: HttpStatus.Ok,
      message: "revalidated tag: " + tag,
    };
  });
}

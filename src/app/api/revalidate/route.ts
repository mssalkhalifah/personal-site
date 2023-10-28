import { HttpStatus, apiHandler } from "@/utils/api";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return apiHandler(request, () => {
    const tag = request.nextUrl.searchParams.get("tag");

    if (!tag)
      return { status: HttpStatus.BadRequest, message: "Tag is missing" };

    revalidateTag(tag);

    return {
      status: HttpStatus.Ok,
      message: "revalidated tag: " + tag,
    };
  });
}

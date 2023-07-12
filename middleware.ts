import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// without defined matcher, this one line applies next-auth to entire project
export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// applying next-auth to matching routes
export const config = { matcher: ["/mentions", "/dashboard"] };

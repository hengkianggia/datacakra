// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { cookies } = request;
//   const jwt = cookies.get("jwt");

//   // Pengecualian untuk halaman register
//   if (request.nextUrl.pathname === "/register") {
//     return NextResponse.next();
//   }

//   // Jika cookie 'jwt' tersedia, izinkan akses ke halaman apa pun
//   if (jwt) {
//     return NextResponse.next();
//   }

//   // Jika cookie 'jwt' tidak tersedia, arahkan ke halaman login
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: ["/", "/about", "/dashboard", "/profile", "/_next/static/*"],
// };

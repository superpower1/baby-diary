import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  const themePreference = request.cookies.get('theme');

  if (!themePreference) {
    response.cookies.set('theme', 'dark')
  }

  response.headers.set("custom-header", 'some_value')

  return response;
}

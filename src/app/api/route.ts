import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server"

export const GET = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set('resultsPerPage', '20')
  const theme = request.cookies.get('theme')

  console.log(requestHeaders.get('Authorization'));
  console.log(headerList.get('Authorization'));

  console.log(theme)
  console.log(cookies().get('resultsPerPage'))

  return new Response('<h1>Hello world!</h1>', {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  })
}

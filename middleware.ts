import { NextResponse, type NextRequest } from 'next/server'
import { updateSession as middlewareUpdateSession} from './middleware';
import next from 'next/dist/server/next';

export async function middleware(request: NextRequest) {
  const response=NextResponse.next();
    return updateSession(request,response,next)
}

 

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}

export { updateSession }
function updateSession(req:Request, res:Response, next:Function) {
  throw new Error('Failed to update session');
}


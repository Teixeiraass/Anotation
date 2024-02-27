import {NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest){
    const token = request.cookies.get('token')?.value

    if(!token){
        if(request.nextUrl.pathname === '/'){
            return NextResponse.next()
        }
        return NextResponse.rewrite(new URL('/', request.url))
    }
    if(request.nextUrl.pathname === '/'){
        return NextResponse.rewrite(new URL('/home', request.url))
    }
}

export const config = {
    matcher: ['/', '/home/:path*']
}
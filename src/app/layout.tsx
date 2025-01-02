import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '미래융합대학 7대 대의원회 "온리"',
  description: '미래를 여는 열쇠, 온리 - 동국대학교 미래융합대학 7대 대의원회',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}


"use client"
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Project cv</title>
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

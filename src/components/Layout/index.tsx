import React from 'react'
import Head from 'next/head'
import { Header } from '../Header'

interface LayoutProps {
  title?: string
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  title = 'Rick and Morty NextJS',
  children,
}: LayoutProps) => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className="w-screen">Here</main>
    </div>
  )
}

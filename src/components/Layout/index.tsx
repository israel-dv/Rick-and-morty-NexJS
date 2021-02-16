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
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {/* // TODO fix height when only have less 10 items */}
      <main className="bg-pink-850 flex flex-1 h-auto w-screen ">
        <div className="flex flex-row flex-wrap mx-auto px-10 py-10 justify-center">
          {children}
        </div>
      </main>
    </div>
  )
}

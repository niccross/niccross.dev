import { ThemeProvider } from '@/components/ThemeProvider';
import React             from 'react';
import { Metadata }      from 'next';
import { Inter }         from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin']});

export const metadata : Metadata = {
  title: {
      default: "Nic Cross - Web Developer",
      template: "%s | Nic Cross - Web Developer",
  },
  description: 'Welcome to my resume/portfolio site!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
    </html>
  )
}

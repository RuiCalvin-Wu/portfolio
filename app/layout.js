export const metadata = {
  title: 'Portfolio - Your Name',
  description: 'A modern Next.js + Tailwind portfolio',
}

import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}

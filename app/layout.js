export const metadata = {
  title: 'Calvin Wu — Software Engineer',
  description: "Master's student in Information Technology Management at HKBU. BSc Computer Science & Information Systems, UCT. Passionate about building innovative solutions at the intersection of technology and business.",
}

import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.theme;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}})()`
        }} />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased">
        {children}
      </body>
    </html>
  )
}

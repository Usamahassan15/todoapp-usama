import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <head></head>
    <body>
      <h1>To-Do App</h1><br/>
      {children}
    </body>
    </html>
  )
}

// These styles apply to every route in the application
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"p-8"}>
      {children}
      </body>
    </html>
  );
}

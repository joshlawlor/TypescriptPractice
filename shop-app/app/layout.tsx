import Link from "next/link";
import styles from './App.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact us</Link>

          </nav>
          {children}
        </main>
        </body>
    </html>
  )
}

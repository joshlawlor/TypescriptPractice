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

      <body className={styles.body}>
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">My Cart</Link>
          <Link href="/contact">Contact us</Link>

        </nav>
        <main className={styles.main}>

          {children}
        </main>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Molecules/navbar'
import Footer from './Components/Molecules/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog | UCSC IEEE CS',
  description: 'CS student chapter Blog'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
        <div
          className={
            ""
          }
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

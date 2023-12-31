import "./globals.css";
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
})


export const metadata = {
  title: "Next.js Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="mx-16 my-6">
        <nav>
        <img src="icon.png" width={100} height={100} />
        </nav>
        {children}
      </body>
    </html>
  );
}

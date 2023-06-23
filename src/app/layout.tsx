import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import localFont from 'next/font/local';

const satoshi = localFont({
  src: './Satoshi-Variable.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Crypto',
  description:
    'A website that allows you to monitor the exchange rate of cryptocurrencies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={satoshi.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Header from './headfoot_components/Header';
import Footer from './headfoot_components/Footer';
import { ReactNode } from 'react';


export const metadata = {
  title: 'Background Prompter',
};

interface RootLayoutProps {
  children: ReactNode; // 追加
}

const bodyStyle = {
  margin: '0 ',
  padding: 0,
};

const mainStyle = {
  paddingTop: '80px', // ヘッダーの高さ分の余白
  paddingBottom: '50px', // フッターの高さ分の余白
  minHeight: '100vh',
  boxSizing: 'border-box' as const,
  margin: 'auto',
   backgroundColor: 'rgb(242, 241, 241)'
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={{ fontFamily: 'Raleway, sans-serif', backgroundColor: 'rgb(220,220,220)', fontSize: '20px' }}>
      <body style={bodyStyle}>
        <Header />
        <main style={mainStyle}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
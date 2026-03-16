import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'MD Coaching Hub - Learn Smartest',
  description: 'MD Coaching Hub provides world-class training programs in Cloud Engineering, App Development, Game Development, IT, Finance, and Business. Enroll now and advance your career.',
  keywords: 'coaching, courses, cloud engineering, app development, game development, IT, finance, business, online learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

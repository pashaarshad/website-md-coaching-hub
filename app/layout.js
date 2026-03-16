import './globals.css';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

export const metadata = {
  title: 'MD Coaching Hub - Learn Smartest',
  description: 'MD Coaching Hub provides world-class training programs in Cloud Engineering, App Development, Game Development, IT, Finance, and Business. Enroll now and advance your career.',
  keywords: 'coaching, courses, cloud engineering, app development, game development, IT, finance, business, online learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toast />
          <ScrollToTop />
        </AppProvider>
      </body>
    </html>
  );
}

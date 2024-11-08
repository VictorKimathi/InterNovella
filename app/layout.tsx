import { ClerkProvider } from '@clerk/nextjs';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-100 m-10 text-gray-900 flex flex-col min-h-screen">
          {/* Header Component */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow container mx-auto px-6 md:px-8 py-10 md:py-12">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {children}
            </div>
          </main>

          {/* Footer Component */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

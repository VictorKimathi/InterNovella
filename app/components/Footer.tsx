export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Internovella Book Library. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="landing-page">
      <h1>Welcome to the Book Library</h1>
      <p>Access a wide range of downloadable books.</p>
      <Link href="/sign-in">
        <button className="get-started-button">Get Started</button>
      </Link>
    </main>
  );
}

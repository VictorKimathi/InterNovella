import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function BooksPage() {
  const books = [
    { id: 1, title: 'Book One', downloadUrl: '/books/book-one.pdf' },
    { id: 2, title: 'Book Two', downloadUrl: '/books/book-two.pdf' },
  ];

  return (
    <>
      <SignedIn>
        <main className="book-list">
          <h2>Available Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <Link href={book.downloadUrl} download>
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

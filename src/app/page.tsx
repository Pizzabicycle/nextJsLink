import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h2>Link to page Page</h2>
        <Link href="/tomato">
            Move to page
        </Link>
      </div>
    );
}

import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline dark:text-blue-300">
              Online Classroom
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          <li>
            <Link href="/profile">
              <a className="no-underline btn-blue">Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a className="no-underline btn-blue">Search</a>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

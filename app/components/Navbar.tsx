import Link from "next/link";

function Navbar() {
  return (
    <nav className="text-black bg-accent h-14 flex items-center px-4 py-2">
      <Link href="/" className="text-sm">
        logo
      </Link>
    </nav>
  );
}

export default Navbar;

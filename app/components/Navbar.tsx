import Link from "next/link";

function Navbar() {
  return (
    <nav className="text-black bg-accent h-14 flex items-center justify-center gap-4 px-4 py-2">
      <Link href="/" className="text-sm">
        Products
      </Link>
      <Link href="/add" className="text-sm">
        Add New Product
      </Link>
    </nav>
  );
}

export default Navbar;

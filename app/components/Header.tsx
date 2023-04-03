import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <nav className="text-black bg-accent h-14 flex items-center px-4 py-2">
      <Link href="/" className="text-sm">
        <Image src="/home.svg" alt="logo" width={32} height={32} />
      </Link>
    </nav>
  );
}

export default Header;

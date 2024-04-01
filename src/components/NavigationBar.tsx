import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="py-4 border-b flex sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">Dialog Example</Link>
        <Link className="text-blue-500 cursor-pointer hover:brightness-150" href="?show-info">
          Open Dialog
        </Link>
      </div>
    </nav>
  );
}

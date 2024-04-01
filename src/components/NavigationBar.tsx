import Link from "next/link";
import { Button } from "./ui/button";

export default function NavigationBar() {
  return (
    <nav className="py-4 border-b flex">
      <div className="container flex items-center justify-between">
        <Link href="/">Dialog Example</Link>
        <Link href="?show-info">
          <Button variant="default">Open Dialog</Button>
        </Link>
      </div>
    </nav>
  );
}

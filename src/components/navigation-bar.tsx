import Link from "next/link";
import { Button } from "./ui/button";
import ModalLink from "./modal-link";

export default function NavigationBar() {
  return (
    <nav className="py-4 border-b flex">
      <div className="container flex items-center justify-between">
        <Link href="/">Dialog Example</Link>
        <Button variant="default" asChild>
          <ModalLink href="?show-info">Open Dialog </ModalLink>
        </Button>
      </div>
    </nav>
  );
}

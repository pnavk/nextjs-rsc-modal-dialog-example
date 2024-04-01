"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function InfoModal() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isOpen = searchParams.has("show-info");

  const onOpenChange = (isOpen: boolean) => {
    const pathName = isOpen ? `${pathname}?show-info` : pathname;
    router.push(pathName);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className="text-blue-500">Click Me!</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Important information</DialogTitle>
          <DialogDescription>This is some information</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

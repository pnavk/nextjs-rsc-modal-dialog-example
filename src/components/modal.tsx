"use client";

import { Dialog } from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type ModalProps = React.PropsWithChildren<{
  routeName: string;
}>;

export default function Modal({ children, routeName }: ModalProps) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.has(routeName);

  /**
   * We use an effect to update the open state whenever the isOpen prop changes.
   * This ensures that the dialog is only opened after the initial render is complete.
   * By using an effect, we enable the ability to share the link to the dialog with others.
   */
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  //whenever the open state changes, update the URL accordingly
  function onOpenChanged(open: boolean): void {
    if (!open) {
      router.replace(pathname, { scroll: false });
    } else {
      //this ensures that the DialogTrigger button works as expected
      router.replace(`${pathname}?${routeName}`, { scroll: false });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChanged}>
      {children}
    </Dialog>
  );
}

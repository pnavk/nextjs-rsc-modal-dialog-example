"use client";

import { Dialog } from "@/components/ui/dialog";
import { useRouter, useSearchParams } from "next/navigation";

type ModalProps = React.PropsWithChildren<{
  routeName: string;
}>;

export default function Modal({ children, routeName }: ModalProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldOpen = searchParams.has(routeName);

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      //clear the query string from the url when the dialog is closed
      router.back();
    }
  };

  return (
    <Dialog open={shouldOpen} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}

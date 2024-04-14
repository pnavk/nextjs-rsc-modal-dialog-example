"use client";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Modal from "../modal";
import ModalLink from "../modal-link";

const RouteIdentifier = "show-info";

export default function InfoModal() {
  return (
    <Modal routeName={RouteIdentifier}>
      <DialogTrigger asChild>
        <Button variant="default" asChild>
          <ModalLink href="?show-info">Open Dialog</ModalLink>
        </Button>
      </DialogTrigger>
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
    </Modal>
  );
}

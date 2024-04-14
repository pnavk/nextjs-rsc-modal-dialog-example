import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type ModalLinkProps = React.PropsWithChildren<Omit<LinkProps, "replace" | "scroll"> & HTMLProps<HTMLAnchorElement>>;

export default function ModalLink({ children, ...rest }: ModalLinkProps) {
  return (
    <Link replace={true} scroll={false} {...rest}>
      {children}
    </Link>
  );
}

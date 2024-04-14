import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type ModalLinkProps = React.PropsWithChildren<LinkProps & HTMLProps<HTMLAnchorElement>>;

export default function ModalLink({ children, ...rest }: ModalLinkProps) {
  return (
    <Link scroll={false} {...rest}>
      {children}
    </Link>
  );
}

import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="p-2 w-full text-xs lg:text-sm mt-5 lg:mt-0" {...props}>
      <ul className="flex flex-row items-center w-full justify-center gap-2 lg:gap-5 text-center">
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Legal Disclaimer</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </footer>
  );
}

import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="p-2 w-full text-xs lg:text-sm mt-5 lg:mt-0" {...props}>
      <ul className="flex flex-row items-center w-full justify-center text-center">
        <li className="footer-item">
          <a
            href="https://www.spark.co.nz/help/privacy-and-safety/how-we-manage-privacy/spark-privacy-policies"
            target="_blank"
          >
            Privacy
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://www.spark.co.nz/help/other/legaldisclaimer/"
            target="_blank"
          >
            Legal Disclaimer
          </a>
        </li>
        <li className="footer-item">
          <a href="#">Terms of Use</a>
        </li>
      </ul>
    </footer>
  );
}

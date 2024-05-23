import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="w-full font-medium text-xs md:text-sm mt-5 lg:mt-0"
      {...props}
    >
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
          <a href="https://www.spark.co.nz/help/other/terms">
            Terms and Conditions
          </a>
        </li>
      </ul>
    </footer>
  );
}

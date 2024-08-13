import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="w-full font-medium" {...props}>
      <a href="https://www.spark.co.nz/online/legal/terms-and-conditions/other-terms/spark-arcade-terms">
        Terms and Conditions
      </a>
    </footer>
  );
}

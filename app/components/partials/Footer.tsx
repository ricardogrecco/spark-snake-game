import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer className="w-full font-medium" {...props}>
      <a href="https://www.spark.co.nz/help/other/terms/competitions/spark-arcade">
        Terms and Conditions
      </a>
    </footer>
  );
}

import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/calculator">
          <a>Calculator</a>
        </Link>
      </li>
      <li>
        <Link href="/mortgage-calculator">
          <a>MortgageCalculator</a>
        </Link>
      </li>
    </ul>
  );
}

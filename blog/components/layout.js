import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const header = (
    <h1>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/CodingExperiments">Coding Experiments</Link>
    </h1>
  );
  const footer = <h1>This is a footer</h1>;

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

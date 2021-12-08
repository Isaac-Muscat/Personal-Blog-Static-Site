import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const navBar = (
    <nav className="bg-black items-center p-3">
      <div className="w-full flex flex-row">
        <Link href="/">
          <a className="navbtn-green">
            Home
          </a>
        </Link>
        <Link href="/About">
          <a className="navbtn-green">
            About
          </a>
        </Link>
        <Link href="/CodingExperiments">
          <a className="navbtn-green">
            Projects
          </a>
        </Link>
      </div>
    </nav>
  );
  const footer = <h1>This is a footer</h1>;

  return (
    <div className="flex flex-col">
      <header>{navBar}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

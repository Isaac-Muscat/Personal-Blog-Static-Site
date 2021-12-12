import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const navBar = (
    <nav className="bg-black items-center p-3">
      <div className="justify-center space-x-10 w-full flex flex-row">
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
  const footer = <h1></h1>;

  return (
    <div className="flex justify-between flex-col h-screen">
      <header>{navBar}</header>
      <main className="mb-auto">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

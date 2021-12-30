import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout({ children }) {
  const router = useRouter();
  const navBar = (
    <nav className="bg-black items-center p-3">
      <Head>
				<title>Isaac Muscat</title>
			</Head>
      <div className="justify-center space-x-10 w-full flex flex-wrap flex-row text-xl">
        <Link href="/">
          <a className="navbtn">
            Home
          </a>
        </Link>
        <Link href="/Projects">
          <a className="navbtn">
            Projects
          </a>
        </Link>
        <Link href="/Blog">
          <a className="navbtn">
            Blog
          </a>
        </Link>
      </div>
    </nav>
  );
  const footer = <h1 className="my-40"></h1>;

  return (
    <div className="w-full">
      <header className="sticky top-0 z-50">{navBar}</header>
      <main className="mb-auto">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

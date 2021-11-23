import Link from "next/link";
import useRouter from "next/router";

export default function Layout({ children }) {
  const header = <h1>This is a header</h1>;

  const footer = <h1>This is a footer</h1>;

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

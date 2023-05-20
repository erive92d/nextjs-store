import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
const Nav = () => {
  return (
    <Navbar className="" fluid={true} rounded={true}>
      <Navbar.Brand href="/" className="flex flex-col">
        <Image src="/transparent-logo.jpg" height={80} width={80} alt=" Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          nextJStore
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/wishlist">Wish List</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

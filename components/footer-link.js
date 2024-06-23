"use client";

import Link from "next/link";

const FooterLink = ({ link }) => {
  return (
    <li className="py-2 cursor-pointer hover:underline">
      <Link href={link.link}>{link.title}</Link>
    </li>
  );
};

export default FooterLink;

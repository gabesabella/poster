"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl"
      >
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          className="w-14 rounded-full"
          src={image}
          alt="google profile image"
          priority
        />
      </Link>
    </li>
  );
}

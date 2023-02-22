"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md "
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}

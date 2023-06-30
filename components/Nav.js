"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import logo from "../public/images/logo.svg";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      Nav
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={logo} alt="Promptly Logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Promptly</p>
      </Link>
      {/* Mobile nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image src={profile} width={37} height={37} className="rounded-full" alt="profile"></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex ">
            <Image
              src={profile}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => {}}
            ></Image>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
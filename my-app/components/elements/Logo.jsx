"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconBUtton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};

  return (
    <section className="flex items-center gap-3">
      <IconBUtton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />
      <div className=" cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
};

export default Logo;

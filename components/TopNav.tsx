"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { MdArrowBack, MdSearch, MdShoppingBag } from "react-icons/md";

const TopNav: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const rootRoutes = ["/"];
  const showBack = !rootRoutes.includes(pathname);

  return (
    <nav className="bg-background flex items-center justify-between p-5 sticky top-0 z-10">
      <div className="flex gap-2 items-center">
        {showBack && (
          <button
            className="text-foreground w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer"
            onClick={() => router.back()}
          >
            <MdArrowBack size={24} />
          </button>
        )}
        <Image
          src="/assets/logo-v2.png"
          width={132}
          height={29}
          alt="Agorily"
        />
      </div>
      <div className="flex gap-2 items-center">
        <button className="bg-foreground hover:bg-foreground/90 transition-all text-background w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer">
          <MdSearch size={24} />
        </button>
        <button className="relative bg-foreground hover:bg-foreground/90 transition-all text-background w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer">
          <span className="bg-red-600 absolute text-[10px] font-semibold px-2 py-0.5 rounded-full right-[-6] top-[-6]">
            25
          </span>
          <MdShoppingBag size={24} />
        </button>
        <button className="bg-foreground hover:bg-foreground/90 transition-all text-background w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562124638-724e13052daf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={44}
            height={44}
            className="object-cover"
            alt="User Profile"
          />
        </button>
      </div>
    </nav>
  );
};

TopNav.displayName = "TopNav";

export default TopNav;

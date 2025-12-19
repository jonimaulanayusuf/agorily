import TopNav from "@/components/TopNav";
import { numberToArray } from "@/utils/array";
import Image from "next/image";
import Link from "next/link";
import { MdLocalShipping } from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <section className="grid grid-cols-2 gap-5 p-5">
        {numberToArray(20).map((item) => (
          <Link key={item} href={`/products/${item}`}>
            <div className="p-2 flex flex-col border-2 gap-2 border-border rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={155}
                width={155}
                alt="Product Image"
                className="w-full object-cover rounded-xl"
              />
              <div className="flex flex-col">
                <h2 className="text-[16px] text-primary">Rp 125.000</h2>
                <h1 className="text-[12px] font-semibold leading-4">
                  True Wireless Bluetooth Earbuds with HD Sound
                </h1>
                <span className="flex gap-1 items-center text-[8px] text-foreground-secondary">
                  <MdLocalShipping size={8} />
                  Pancoran, Jakarta Selatan
                </span>
              </div>
              <button className="bg-primary hover:bg-primary/90 transition-all text-background text-[12px] font-semibold p-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

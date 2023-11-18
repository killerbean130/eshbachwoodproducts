import Image from "next/image";
import logo from "../../public/ewpl.png";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const about = useRef<HTMLDivElement>(null);
  const products = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      const ids = [];
      let target = e.target;
      while (target.parentElement) {
        ids.push(target.id);
        target = target.parentElement;
      }
      if (!ids.includes("dropdown")) {
        setDropdownOpen(false);
      }
    });
  }, []);

  function scrollToRef(ref: any) {
    const topPadding = window.screen.width > 768 ? 155 : 155;
    window.scrollTo({
      top: ref.current?.offsetTop! - topPadding,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <header className="sticky top-0 z-40 dark:bg-[#222] bg-slate-100 py-8 px-8">
        <nav className="flex justify-between">
          <div className="flex w-24 h-20 relative">
            <button>
              <Image
                src={logo}
                fill={true}
                placeholder="blur"
                alt="eshbach wood products logo"
              />
            </button>
          </div>

          <div className="relative flex items-center">
            <button
              id="dropdown"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="navigation dropdown menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <>
                <div className="w-4 h-4 right-5 rotate-45 top-[4.7rem] absolute z-10 bg-blue-600"></div>
                <ul className="flex flex-col gap-4 absolute text-2xl p-6 right-0 top-20 bg-blue-600">
                  <li>
                    <button>about</button>
                  </li>
                  <li>
                    <button>products</button>
                  </li>
                  <li>
                    <button>contact</button>
                  </li>
                </ul>
              </>
            )}
          </div>

          <ul className="md:flex gap-4 text-2xl hidden items-center">
            <li>
              <button>about</button>
            </li>
            <li>
              <button>products</button>
            </li>
            <li>
              <button>contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        ref={about}
        className="min-h-[85vh] mt-14 items-center flex flex-col gap-32"
      >
        <div className="flex flex-col items-center gap-4 font-bold">
          <div className="flex w-52 h-48 relative">
            <Image
              src={logo}
              fill={true}
              placeholder="blur"
              alt="eshbach wood products logo"
            />
          </div>
          <h1 className="text-5xl">Eshbach Wood Products</h1>
          <h2 className="text-4xl">
            The Heart of Lancaster's Woodworking Artistry
          </h2>
        </div>
        <p className="text-2xl w-[80%] md:w-[75%] lg:w-[50%]">
          Welcome to Eshbach Wood Products, where the art of woodcraft meets the
          heart of sustainability. Our specialty lies in creating stunning end
          grain table tops and durable end grain flooring, each piece a
          testament to the natural beauty of Pennsylvania's forests. Crafted
          from sustainably harvested lumber, our products not only add elegance
          and character to your space but also embody our commitment to
          environmental stewardship. Experience the blend of traditional
          craftsmanship and modern sustainability with Eshbach Wood Products.
        </p>

        <button
          onClick={() => scrollToRef(products)}
          className="flex gap-2 group items-center text-3xl bg-green-500 p-4 border-transparent hover:border-white border transition-all hover:bg-[#22de5e] rounded-md text-black"
        >
          Explore Our Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            className="bi bi-arrow-down-short group-hover:animate-bounce"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-16 flex-col px-8">
        <h2 className="text-5xl font-bold">Our Products</h2>
        <div ref={products} className="min-h-screen gap-28 flex flex-col">
          <div className="flex">
            <div>
              <h3 className="text-3xl text-green-500">End Grain Flooring</h3>
              <p className="text-lg">
                At Eshbach Wood Products, our end grain flooring stands as a
                hallmark of exceptional craftsmanship. Each piece is
                meticulously cut to showcase the intricate and unique growth
                rings of Pennsylvania's finest woods. Renowned for its
                resilience and ability to withstand heavy foot traffic, our end
                grain flooring brings a touch of Lancaster's natural elegance to
                homes and businesses alike, offering a perfect blend of style,
                sustainability, and long-lasting quality.
              </p>
            </div>
            <div>Images</div>
          </div>
          <div className="flex flex-row-reverse">
            <div>
              <h3 className="text-3xl text-green-500">
                Sustainably Harvested Lumber
              </h3>
              <p className="text-lg">
                Our commitment to sustainability is a testament to our
                dedication to quality, environmental stewardship, and social
                responsibility. At Eshbach Wood Products, we strive to balance
                ecological health with economic viability, ensuring that our
                business not only thrives but also contributes positively to a
                more sustainable future for all.
              </p>
            </div>
            <div>Images</div>
          </div>
          <div className="flex">
            <div>
              <h3 className="text-3xl text-green-500">End Grain Table Tops</h3>
              <p className="text-lg">
                Eshbach Wood Products takes pride in crafting exquisite end
                grain table tops, each a masterpiece of natural artistry. Our
                table tops, made from the finest Pennsylvania woods, feature a
                distinctive end grain pattern that not only adds visual depth
                and character but also ensures remarkable durability. Creating a
                focal point of beauty and timeless design in any setting.
              </p>
            </div>
            <div>Images</div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">contact</div>
    </div>
  );
}

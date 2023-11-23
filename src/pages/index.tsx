import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import logo from "../../public/ewpl.png";
import instagramLogo from "../../public/instagram.png";
import shl1 from "../../public/shl1.jpg";
import shl2 from "../../public/shl2.jpg";
import shl3 from "../../public/shl3.jpg";
import shl4 from "../../public/shl4.jpg";
import shl5 from "../../public/shl5.jpg";
import egf1 from "../../public/egf1.jpg";
import egf2 from "../../public/egf2.jpg";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
    const topPadding =
      (document.querySelector("header")?.offsetHeight as number) + 10;
    window.scrollTo({
      top: ref.current?.offsetTop! - topPadding,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex flex-col md:gap-20">
      <header className="sticky top-0 z-40 dark:bg-[#222] bg-green-500 md:py-8 py-4 px-8">
        <nav className="flex justify-between">
          <div className="flex md:w-24 md:h-20 w-20 h-16 relative">
            <button onClick={() => scrollToRef(aboutRef)}>
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
              className="md:hidden p-2"
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
                <div className="w-4 h-4 right-5 rotate-45 top-[4.7rem] absolute z-10 bg-gray-200"></div>
                <ul className="dark:text-black flex flex-col gap-4 absolute text-2xl p-6 right-0 top-20 bg-gray-200">
                  <li>
                    <button onClick={() => scrollToRef(aboutRef)}>about</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToRef(productsRef)}>
                      products
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToRef(galleryRef)}>
                      gallery
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToRef(contactRef)}>
                      contact
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>

          <ul className="md:flex gap-4 text-2xl hidden items-center">
            <li>
              <button onClick={() => scrollToRef(aboutRef)}>about</button>
            </li>
            <li>
              <button onClick={() => scrollToRef(productsRef)}>products</button>
            </li>
            <li>
              <button onClick={() => scrollToRef(galleryRef)}>gallery</button>
            </li>
            <li>
              <button onClick={() => scrollToRef(contactRef)}>contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        ref={aboutRef}
        className="min-h-[85vh] items-center flex flex-col md:gap-32 gap-10"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex md:w-52 md:h-48 w-36 h-32 relative">
            <Image
              src={logo}
              fill={true}
              placeholder="blur"
              alt="eshbach wood products logo"
            />
          </div>
          <div>
            <h1 className="md:text-5xl text-center text-2xl font-cinzel">
              Eshbach Wood Products
            </h1>
            <p className="text-center md:text-sm text-[0.65rem]">est. 2009</p>
          </div>
          <h2 className="md:text-4xl text-xl text-center font-semibold">
            The Heart of Lancaster's Woodworking Artistry
          </h2>
        </div>
        <p className="md:text-2xl text-center text-lg w-[80%] md:w-[75%] lg:w-[50%]">
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
          onClick={() => scrollToRef(productsRef)}
          className="flex gap-2 group items-center text-white md:text-3xl text-lg bg-green-500 p-4 border-transparent dark:hover:border-white hover:border-black border transition-all hover:bg-[#22de5e] rounded-md dark:text-black"
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

      <div
        ref={productsRef}
        className="flex items-center gap-24 flex-col px-8 md:px-12 xl:px-56 2xl:px-[24rem]"
      >
        <h2 className="md:text-5xl text-3xl font-bold">Our Products</h2>
        <div className="min-h-screen md:gap-52 gap-16 flex flex-col">
          <ProductSection
            text="At Eshbach Wood Products, our end grain flooring stands as a
                hallmark of exceptional craftsmanship. Each piece is
                meticulously cut to showcase the intricate and unique growth
                rings of Pennsylvania's finest woods. Renowned for its
                resilience and ability to withstand heavy foot traffic, our end
                grain flooring brings a touch of Lancaster's natural elegance to
                homes and businesses alike, offering a perfect blend of style,
                sustainability, and long-lasting quality."
            heading="End Grain Flooring"
          >
            <>
              <BigImagePresentation>
                <ImageFocus fill={true} src={egf1} alt="end grain flooring" />
              </BigImagePresentation>
              <ImagePresentationColumn>
                <ImagePresentationRow>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      src={egf1}
                      fill={true}
                      alt="end grain flooring"
                    />
                  </ImagePresentationWrapper>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      src={egf2}
                      fill={true}
                      alt="end grain flooring"
                    />
                  </ImagePresentationWrapper>
                </ImagePresentationRow>
              </ImagePresentationColumn>
            </>
          </ProductSection>

          <ProductSection
            reverse
            text="Our commitment to sustainability is a testament to our
            dedication to quality, environmental stewardship, and social
            responsibility. At Eshbach Wood Products, we strive to balance
            ecological health with economic viability, ensuring that our
            business not only thrives but also contributes positively to a
            more sustainable future for all."
            heading="Sustainably Harvested Lumber"
          >
            <>
              <BigImagePresentation>
                <ImageFocus
                  fill={true}
                  src={shl1}
                  alt="sustainably harvested lumber"
                />
              </BigImagePresentation>

              <ImagePresentationColumn>
                <ImagePresentationRow>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      fill={true}
                      src={shl1}
                      alt="sustainably harvested lumber"
                    />
                  </ImagePresentationWrapper>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      fill={true}
                      src={shl2}
                      alt="sustainably harvested lumber"
                    />
                  </ImagePresentationWrapper>
                </ImagePresentationRow>
                <ImagePresentationRow>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      fill={true}
                      src={shl3}
                      alt="sustainably harvested lumber"
                    />
                  </ImagePresentationWrapper>
                  <ImagePresentationWrapper>
                    <ImageFocus
                      fill={true}
                      src={shl4}
                      alt="sustainably harvested lumber"
                    />
                  </ImagePresentationWrapper>
                </ImagePresentationRow>
              </ImagePresentationColumn>
            </>
          </ProductSection>
          <ProductSection
            text="Eshbach Wood Products takes pride in crafting exquisite end
            grain table tops, each a masterpiece of natural artistry. Our
            table tops, made from the finest Pennsylvania woods, feature a
            distinctive end grain pattern that not only adds visual depth
            and character but also ensures remarkable durability. Creating a
            focal point of beauty and timeless design in any setting."
            heading="End Grain Table Tops"
          >
            <div className="flex-1"></div>
          </ProductSection>
        </div>
      </div>
      <div ref={galleryRef}>
        <div className="flex items-center gap-24 flex-col px-8 md:px-12 xl:px-56 2xl:px-[24rem]">
          <h2 className="md:text-5xl text-3xl font-bold">Gallery</h2>
          <div className="flex md:gap-4 gap-2 flex-wrap justify-center">
            <ImagePresentationWrapper>
              <ImageFocus
                fill={true}
                src={shl2}
                alt="sustainably harvested lumber"
              />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus fill={true} src={egf2} alt="end grain flooring" />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus
                fill={true}
                src={shl3}
                alt="sustainably harvested lumber"
              />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus
                fill={true}
                src={shl1}
                alt="sustainably harvested lumber"
              />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus
                fill={true}
                src={shl4}
                alt="sustainably harvested lumber"
              />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus fill={true} src={egf1} alt="end grain flooring" />
            </ImagePresentationWrapper>
            <ImagePresentationWrapper>
              <ImageFocus
                fill={true}
                src={shl5}
                alt="sustainably harvested lumber"
              />
            </ImagePresentationWrapper>
          </div>
        </div>
      </div>
      <div
        ref={contactRef}
        className="min-h-screen flex flex-col gap-16 items-center"
      >
        <h2 className="md:text-5xl text-3xl font-bold">Contact Us</h2>
        <div className="flex [&>*]:flex [&>*]:flex-col [&>*]:gap-2 flex-col md:gap-4 bg-green-500 text-center text-black rounded-md text-lg md:text-3xl py-8 px-2 md:p-8">
          <div>
            <p>Give us a call</p>
            <a href="tel:+17177999517" className="font-semibold">
              (717) 799-9517
            </a>
          </div>
          <p>or</p>
          <div>
            <p>Message us</p>
            <a href="mailto:" className="font-semibold">
              eshbachwoodproducts@hotmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-semibold text-4xl">Follow Us</p>
          <Link
            className="w-40 h-40 relative block"
            href="https://www.instagram.com/eshbachwoodproducts/"
          >
            <Image src={instagramLogo} fill={true} alt="Instagram logo" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between text-xs px-2">
        <p>Eshbachwoodproducts LLC © 2023</p>
        <p>website by Daniel Comp</p>
      </div>
    </div>
  );
}

const ProductSection = ({
  heading,
  text,
  children,
  reverse = false,
}: {
  heading: string;
  text: string;
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex gap-10 md:flex-row flex-col ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 gap-2 flex flex-col">
        <h3 className="text-3xl text-green-600 font-semibold">{heading}</h3>
        <p className="text-lg">{text}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">{children}</div>
    </div>
  );
};

const ImageFocus = ({
  src,
  alt,
  fill,
  width,
  height,
  className,
}: {
  src: StaticImageData;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => {
  const [imageFocused, setImageFocused] = useState(false);

  return (
    <>
      <Image
        onClick={() => setImageFocused(true)}
        className={"cursor-pointer md:rounded-md " + className}
        src={src}
        fill={fill}
        width={fill ? undefined : width ? width : 100}
        height={fill ? undefined : height ? height : 100}
        alt={alt}
      />
      {imageFocused &&
        createPortal(
          <>
            <div className="fixed left-0 top-0 h-screen w-screen z-50 bg-black opacity-30"></div>
            <div
              onClick={() => setImageFocused(false)}
              className="fixed w-screen h-screen top-0 left-0 z-[100] flex justify-center items-center"
            >
              <div className="lg:w-[55rem] lg:h-[50rem] sm:w-[35rem] w-[25rem] h-[20rem] sm:h-[30rem] md:w-[45rem] md:h-[40rem] relative flex">
                <Image
                  className={className}
                  onClick={() => setImageFocused(true)}
                  src={src}
                  fill={true}
                  alt={alt}
                />
                <button
                  onClick={() => setImageFocused(false)}
                  className="absolute right-0 top-0 text-2xl rounded-full"
                  aria-label="close image modal"
                >
                  X
                </button>
              </div>
            </div>
          </>,
          document.querySelector("#__next") as Element
        )}
    </>
  );
};

const ImagePresentationWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element;
}) => {
  return (
    <div className="relative flex w-[8.5rem] h-[8rem] md:w-[15rem] md:h-[11.5rem] lg:w-[20rem] lg:h-[16.5rem]">
      {children}
    </div>
  );
};

const ImagePresentationColumn = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="flex md:hidden lg:gap-8 gap-4 flex-col items-center">
      {children}
    </div>
  );
};

const ImagePresentationRow = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return <div className="flex lg:gap-4 gap-2">{children}</div>;
};

const BigImagePresentation = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="hidden relative xl:w-[22rem] xl:h-[20rem] md:w-[17rem] md:h-[15rem] md:flex w-12 h-12">
      {children}
    </div>
  );
};

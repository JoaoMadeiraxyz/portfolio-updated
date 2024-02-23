"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Lenis from "@studio-freight/lenis";

import heroImage from "../../public/images/hero-image.png";
import primorgroupImage from "../../public/images/work-primorgroup.png";

import { ArrowCircleDown } from "@phosphor-icons/react";

export default function Home() {
  const stack = [
    "React.js",
    "Next.js",
    "Javascript",
    "Tailwindcss",
    "CSS",
    "Figma",
  ];

  return (
    <main className="flex min-h-screen bg-main-black flex-col text-main-white relative">
      <div className="absolute top-0 -right-[3%] w-[35vw] max-w-[800px]">
        <Image
          src={heroImage}
          quality={100}
          alt="An black and white image of a man looking up to the right"
        />
      </div>
      <section className="flex flex-col justify-between min-h-screen p-32">
        <div className="flex flex-col">
          <p className="text-2xl">I'm</p>
          <h1 className="mainTitle font-bold text-8xl">JOAO VICTOR</h1>
          <p className="text-2xl text-main-orange">Web developer</p>
        </div>

        <Link
          className="flex flex-row gap-1 text-base w-fit items-end"
          href={"#"}
        >
          <ArrowCircleDown size={32} />
          See more
        </Link>
      </section>

      <section className="flex flex-col min-h-screen p-32">
        <p className="text-2xl text-main-orange font-bold">About me</p>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-4xl">
            I'm a web developer who loves everything about design and
            programming. My main goal as an professional is to develop
            unforgettable experiences through web development.
          </p>
          <p className="font-bold text-4xl">
            I started coding at the age of 16 and began my career in 2023 at the
            age of 18. For me, creating websites is not just a money thing. Even
            if I weren't a developer, I would still be creating websites for
            myself because I love learning and creating new things.
          </p>
        </div>
      </section>

      <section className="flex flex-col min-h-screen py-32">
        <div className="px-32">
          <p className="text-2xl text-main-orange font-bold">
            Stuff that I use
          </p>
        </div>
        <div className="flex flex-col mt-10">
          {stack.map((item) => (
            <div className="flex flex-col first:border-t-4 border-b-4 border-main-gray text-4xl py-9 px-32 font-bold">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col min-h-screen p-32">
        <p className="text-2xl text-main-orange font-bold">My Work</p>
        <div className="flex flex-col mt-5">
          <Image src={primorgroupImage} alt="website primorgroup" />
        </div>
      </section>
    </main>
  );
}

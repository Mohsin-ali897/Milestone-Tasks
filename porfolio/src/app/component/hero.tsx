'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';
import HeroPic from '../assets/porfolio.jpg';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Mohsin Ali', 'Web Developer', 'React Developer'],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-around items-center my-20">
      <div className="w-1/3 flex justify-center">
        <Image
          src={HeroPic}
          alt="Mohsin Ali"
          width={200}
          height={200}
          className="w-4/5 h-auto"
        />
      </div>
      <div className="w-1/3 text-3xl">
        <h1 className="text-4xl">
          Hello <br /> <span className="text-purple-600 font-extrabold">I am </span>
          <br />
          <span ref={el} className="text-red-600 tracking-wide font-semibold" />
        </h1>
        <div className="mt-6 flex space-x-4">
          <Link href="/about">
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white rounded-lg shadow-md transition">
              About Me
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md transition">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

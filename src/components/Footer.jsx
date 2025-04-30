import { rightImg } from "@/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="mt-5 flex-center flex-col  p-10">
      <p className="text-gray-400">
        copyright © Developed by <span className="text-white">Ali .</span>{" "}
      </p>
      <Link className="my-5 flex-center gap-3 text-blue-500 underline" href={'https://a-abdelali.vercel.app/'} target="_blanc">My website 
      <img src={rightImg} alt="" />
      </Link>
      <p className="text-gray-400">
        Design from
        <span className="text-white"> JavaScript Mastery channel .</span>{" "}
      </p>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function Aside() {
  // url(https://ssl.gstatic.com/docs/common/material_common_sprite687_gm3_grey_medium.svg)
  return (
    <aside className="w-full bg-gray-200 p-4 lg:w-1/4">
      <div className="flex items-center justify-center pb-8">
        <Button className="rounded-lg bg-[#1151A2] p-2 text-white hover:bg-[linear-gradient(120deg,var(--primary),var(--accent))]">
          Make a submission
        </Button>
      </div>
      <div className="pb-8">
        <h1 className="text-xl font-bold underline underline-offset-4">
          Templates
        </h1>
        <Link
          href={"/"}
          target="_blank"
          className="mx-4 mt-4 flex w-fit flex-col justify-start"
        >
          <Image
            src="/PostImages/word.png"
            alt="word-icon"
            width={56}
            height={56}
          />
          <h1 className="font-semibold text-[var(--primary)]">Word File</h1>
        </Link>
      </div>
      <div className="top-4">
        <h2 className="pb-4 text-xl font-bold underline underline-offset-4">
          JOURNAL INFORMATION
        </h2>
        <div className="flex flex-col justify-start gap-2">
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Journal:</span> AL-KADHIM
            JOURNAL of Science
          </p>
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Publisher:</span> Imam
            Al-Kadhum College (IKC)
          </p>
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">ISSN:</span> 3007-1429
            (P) - 3007-1437 (O)
          </p>
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Discipline:</span>{" "}
            Science (Multidisciplinary)
          </p>
          {/* edit here <p className="pb-3 border-b border-gray-400">DOI: https://doi.org/10.61710/kjcs.v2i1</p> */}
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Media:</span> Printed &
            Online
          </p>
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Language:</span> English
          </p>
          <p className="border-b border-gray-400 pb-3">
            <span className="font-semibold text-black">Country:</span> IRAQ
          </p>
        </div>
      </div>
    </aside>
  );
}

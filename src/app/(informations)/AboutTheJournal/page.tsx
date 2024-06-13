import Head from "next/head";
import React from "react";
import Aside from "~/app/_components/Aside";
import Bread from "~/app/_components/Bread";

export default function AboutTheJournal() {
  return (
    <div className="flex w-full bg-white shadow-md">
      <div className="flex w-full flex-col lg:flex-row">
        <main className="w-full p-8 text-black">
          <Bread
            prevTitle={"Home"}
            prevUrl={"/"}
            currentTitle={"AboutTheJournal"}
            currentUrl={"/AboutTheJournal"}
          />

          <div className="pt-10">
            <Head>
              <title>About the Journal</title>
              <meta name="description" content="About KJCS Journal" />
            </Head>
            <div className="w-full max-w-4xl rounded bg-white p-8">
              <h1 className="mb-4 text-3xl font-bold">About the Journal</h1>

              <h2 className="mb-2 text-xl font-semibold">Aims and Scope</h2>
              <p className="mb-4">
                KJCS is a free journal published by Imam Al-Kadhim university
                College (IKU), Baghdad, Iraq. It is international open access
                for all researchers in the world to share and promote their
                ideas. KJCS includes the following fields of computer science:
              </p>

              <ol className="list-inside list-decimal space-y-1 md:pl-8">
                <li>Artificial Intelligence</li>
                <li>Security and Cybersecurity</li>
                <li>Data Science and Big Data</li>
                <li>Computer Vision and Image Processing</li>
                <li>Computer Networks and Distributed Systems</li>
                <li>Software Engineering and Development</li>
                <li>Theory of Computation</li>
                <li>Soft Computing</li>
              </ol>

              <div className="flex flex-col gap-4 pt-[1.43rem]">
                <p>
                  The journal aims mainly to contribute to the maturity of
                  scientific research and strongly encourages and supports any
                  researcher to participate in this maturity. To achieve this
                  goal, we welcome all academics and scientists in the sciences
                  to publish their scientific products. The publication of this
                  journal contributes to the development of science and its
                  impact. In addition, it provides a means of discussion for
                  science researchers.
                </p>

                <p>
                  KJCS is published quarterly. For publication in this journal,
                  all submitted manuscripts must be written in English and
                  formatted according to the journal template. KJCS uses
                  iThenticate for plagiarism checks to ensure the originality of
                  the submitted manuscripts. Ultimately, each submitted
                  manuscript undergoes a fair review procedure.
                </p>

                <p>
                  Users are allowed to read, download, copy, distribute, print,
                  search, or link to the full texts of the articles, without
                  asking prior permission from the publisher or the author. This
                  is in accordance with the BOAI definition of open access.
                </p>

                <p>
                  The first issue was published under the title &quot;Journal of
                  Imam Al Kadhum College for Engineering and Applied Sciences
                  (JKCEAS)&quot; and the ISSN 2959-2232 is linked to this title.
                  In December 2023, the journal started running its website
                  under the serial name &quot;Alkadhum Journal of Science
                  (AKJS)&quot; with a new ISSN: 3005-2378 (Print), ISSN:
                  3005-2386(Online).
                </p>
              </div>
            </div>
          </div>
        </main>

        <Aside />
      </div>
    </div>
  );
}

import Head from "next/head";
import React from "react";
import Aside from "~/app/_components/Aside";
import Bread from "~/app/_components/Bread";

const EditorialTeamList = [
  {
    title: `Prof. Dr. Abdul Jalil M. Khalaf, Mathematics-Graph Theory, Imam Al-Kadhim university College, Iraq.
    (Editor in Chief)`,
    email: "amkhalaf@iku.edu.iq",
  },
  {
    title: `Assist. Prof. Dr. Murtadha A. Alazzawi, computer Science-Network security, Imam Al-Kadhim university College, Iraq. (Managing Editor)`,
    email: "murtadhaali@ iku.edu.iq",
  },
  {
    title: `Prof. Dr. Abeer J. Hussain,  Electronic Computer System-Image and Signal Processing, Liverpool John Moores University, U.K.`,
    email: "a.hussain@ljmu.ac.uk",
  },
  {
    title: `Prof. Dr. Ibrahim N. Ibraheem, Computer Science U+002d Multimedia Processing and Security, Mustansiriyah University, Iraq.`,
    email: "ibraheemnadher@uomustansiriyah.edu.iq",
  },

  {
    title: `Prof. Dr. Zaher M. Hussain, Signal Processing, University of Kufa, Iraq.`,
    email: "zahir.hussain@uokufa.edu.iq",
  },
  {
    title: `Assist. Prof. Dr. Mehdi Ismaili, Computer Science- Computer Engineering, Kashan Council Research Center, Kashan, Iran.`,
    email: "m.esmaeili@iaukashan.ac.ir",
  },
  {
    title: `Assist. Prof. Dr. Jolan R. Naif, Computer Science -information security, Informatics Institute for Postgraduate Studies, Iraq.`,
    email: "dr.jolan_alkhazraji@iips.icci.edu.iq",
  },
  {
    title: `Assoc. Prof. Dr. Selvakumar Manickam, Computer Science, Cybersecurity, University Sains Malaysia (USM), George Town, Penang, Malaysia.`,
    email: "selva@usm.my",
  },
  {
    title: `Assist. Prof. Dr. Hazim A. Alsaqaa, Computer Science-Information Technology, St. Cloud State University, U.S.)`,
    email: "haalsaqaa@stcloudstate.edu",
  },
  {
    title: `Assist. Prof. Saif Amer Fadhil, computer science- network security, Imam Al-Kadhim university College, Iraq.`,
    email: "saifaamer@iku.edu.iq",
  },
  {
    title: `Assist. Prof. Lubna Emad Kadhum, computer science-Data security, Imam Al-Kadhim university College.`,
    email: "Iraq.lubnaemad@iku.edu.iq",
  },
  {
    title: `Dr. Huda H. Ali, computer science- Data Security, and Artificial Intelligence, Imam Al-Kadhim university College, Iraq.`,
    email: "Comping.lecturer5@iku.edu.iq",
  },
  {
    title: `Proofreader: Adnan T. Rahmah, English Language/English Literature, Imam Al-Kadhim university College, Iraq.`,
    email: "",
  },
];

export default function EditorialTeam() {
  return (
    <div className="flex w-full bg-white shadow-md">
      <div className="flex w-full flex-col lg:flex-row">
        <main className="w-full p-8 text-black">
          <Bread
            prevTitle={"Home"}
            prevUrl={"/"}
            currentTitle={"EditorialTeam"}
            currentUrl={"/EditorialTeam"}
          />

          <div className="pt-10">
            <Head>
              <title>Editorial Team</title>
              <meta
                name="description"
                content="About The KJCS Editorial Team"
              />
            </Head>

            <div className="w-full max-w-4xl rounded bg-white p-8">
              <h1 className="mb-4 text-3xl font-bold">Editorial Team</h1>

              <div className="flex flex-col gap-4 pt-[1.43rem]">
                {EditorialTeamList.map((item, index) => (
                  <p key={index}>
                    {item.title}{" "}
                    <a
                      className="text-[var(--primary)]"
                      href={`mailto:${item.email}`}
                    >
                      {item.email}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Aside />
      </div>
    </div>
  );
}

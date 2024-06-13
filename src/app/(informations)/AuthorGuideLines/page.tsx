import Head from "next/head";
import Link from "next/link";
import React from "react";
import Aside from "~/app/_components/Aside";
import Bread from "~/app/_components/Bread";

const AuthorGuideLinesList = [
  {
    id: 1,
    title: "Reporting standards",
    description:
      "Authors of original research reports should present an accurate account of the work performed as well as an objective discussion of its significance. Underlying data should be represented accurately in the paper. A paper should contain sufficient detail and references to permit others to replicate the work. Fraudulent or knowingly inaccurate statements constitute unethical behavior and are unacceptable.",
  },
  {
    id: 2,
    title: "Data access and retention",
    description:
      "Authors could be asked to provide the raw data of their study together with the paper for editorial review and should be prepared to make the data publicly available if practicable. In any event, authors should ensure accessibility of such data to other competent professionals for at least ten years after publication (preferably via an institutional or subject-based data repository or other data center), provided that the confidentiality of the participants can be protected and legal rights concerning proprietary data do not preclude their release.",
  },
  {
    id: 3,
    title: "Originality, plagiarism and acknowledgement of sources",
    description:
      "Authors will submit only entirely original works, and will appropriately cite or quote the work and/or words of others. Publications that have been influential in determining the nature of the reported work should also be cited.",
  },
  {
    id: 4,
    title: "Multiple, redundant or concurrent publication",
    description: `In general, papers describing essentially the same research should not be published in more than one journal. Submitting the same paper to more than one journal constitutes unethical publishing behavior and is unacceptable.
    Manuscripts which have been published as copyrighted material elsewhere cannot be submitted. In addition, manuscripts under review by the journal should not be resubmitted to copyrighted publications. However, by submitting a manuscript, the author(s) retain the rights to the published material. In case of publication they permit the use of their work under a CC-BY license [ <a target="_blank" href="http://creativecommons.org/licenses/by/3.0/">http://creativecommons.org/licenses/by/3.0/</a> ] which allows others to copy, distribute and transmit the work as well as to adapt the work and to make commercial use of it.`,
  },
  {
    id: 5,
    title: "Authorship of the paper",
    description:
      "Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. All those who have made significant contributions should be listed as co-authors.Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study. All those who have made significant contributions should be listed as co-authors.",
  },
  {
    id: 6,
    title: "Disclosure and conflicts of interest",
    description:
      "All authors should include a statement disclosing any financial or other substantive conflicts of interest that may be construed to influence the results or interpretation of their manuscript. All sources of financial support for the project should be disclosed.",
  },
  {
    id: 7,
    title: "Fundamental errors in published works",
    description:
      "When an author discovers a significant error or inaccuracy in his/her own published work, it is the authorâ€™s obligation to promptly notify the journal editor or publisher and to cooperate with the editor to retract or correct the paper in form of an erratum.",
  },
  {
    id: 8,
    title: "Reference",
    description:
      "Committee on Publication Ethics (COPE). (2011, March 7). Code of Conduct and Best-Practice Guidelines for Journal Editors. Retrieved from",
  },
];

export default function AuthorGuideLines() {
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
              <title>Author GuideLines</title>
              <meta
                name="description"
                content="About The KJCS Author GuideLines"
              />
            </Head>

            <div className="w-full max-w-4xl rounded bg-white p-8">
              <h1 className="mb-4 text-3xl font-bold">Author GuideLines</h1>

              <div className="flex flex-col gap-4 pt-[1.43rem]">
                {AuthorGuideLinesList.map((item) => (
                  <div key={item.id}>
                    <h2 className="pb-2 text-lg font-bold">{item.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </div>
                ))}
                <p className="break-words">
                  <Link
                    className="text-[var(--primary)]"
                    href={
                      "http://publicationethics.org/files/Code_of_conduct_for_journal_editors_Mar11.pdf"
                    }
                  >
                    http://publicationethics.org/files/Code_of_conduct_for_journal_editors_Mar11.pdf
                  </Link>
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

import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getPost } from "~/server/queries";
import FAQPage from "./_components/Faq";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen w-full bg-white shadow-md dark:text-black">
      <div className="flex w-full flex-col lg:flex-row">
        <main className="w-full p-4">
          <div className="flex w-full flex-col items-center justify-around md:flex-row md:gap-4 md:pt-4">
            <div className="flex flex-col items-center justify-center md:hidden md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="347.5"
                height="400"
                viewBox="0 0 652 644"
                fill="none"
                className="mondrian"
                data-astro-cid-j7pv25f6
              >
                {" "}
                <rect
                  opacity="0.05"
                  x="1"
                  width="163"
                  height="60"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  width="193"
                  height="60"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="68"
                  width="193"
                  height="175"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.2"
                  x="424"
                  y="401"
                  width="193"
                  height="79"
                  rx="10"
                  fill="var(--primary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="255"
                  y="626"
                  width="362"
                  height="18"
                  rx="9"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="579"
                  width="166"
                  height="65"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="255"
                  y="579"
                  width="160"
                  height="40"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="255"
                  y="490"
                  width="160"
                  height="80"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="255"
                  y="400"
                  width="160"
                  height="80"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="68"
                  width="335"
                  height="324"
                  rx="10"
                  fill="var(--primary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="401"
                  width="166"
                  height="169"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="490"
                  width="193"
                  height="129"
                  rx="10"
                  fill="var(--accent)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="626"
                  y="490"
                  width="26"
                  height="154"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="252"
                  width="91"
                  height="140"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="524"
                  y="252"
                  width="93"
                  height="140"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="626"
                  width="26"
                  height="480"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="173"
                  width="242"
                  height="60"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="1"
                  y="68"
                  width="70"
                  height="157"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="1"
                  y="234"
                  width="70"
                  height="259"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="1"
                  y="502"
                  width="70"
                  height="142"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
              </svg>
            </div>
            <div className="w-full md:w-auto">
              <h1 className="w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-wrap text-4xl font-bold md:w-fit md:text-6xl">
                Welcome To Al-Kadhim <br />
                <span
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="bg-[linear-gradient(120deg,var(--primary),var(--accent))]"
                >
                  Journal
                </span>{" "}
                for{" "}
                <span
                  style={{
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "var(--text)",
                  }}
                  className="italic text-transparent"
                >
                  Computer Science
                </span>
              </h1>

              <p className="w-full pt-12 text-gray-700 md:w-[70%] md:text-left">
                The journal aims mainly to contribute to the maturity of
                scientific research and strongly encourages and supports any
                researcher to participate in this maturity.
              </p>

              <div className="flex w-fit items-center justify-center gap-4 pb-8 pt-12 md:flex-row">
                <Button className="rounded-xl bg-[var(--primary)] px-8 py-2 text-lg text-white transition-all hover:-translate-y-1">
                  Go to Articles
                </Button>
                <SignedOut>
                  <Button className="rounded-xl bg-[var(--secondary)] px-8 py-2 text-lg text-white transition-all hover:-translate-y-1">
                    Sign Up
                  </Button>
                </SignedOut>
              </div>
            </div>

            <div className="hidden h-full w-full flex-col items-end md:flex md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="447.5"
                height="644"
                viewBox="0 0 652 644"
                fill="none"
                className="mondrian"
                data-astro-cid-j7pv25f6
              >
                {" "}
                <rect
                  opacity="0.05"
                  x="1"
                  width="163"
                  height="60"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  width="193"
                  height="60"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="68"
                  width="193"
                  height="175"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.2"
                  x="424"
                  y="401"
                  width="193"
                  height="79"
                  rx="10"
                  fill="var(--primary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="255"
                  y="626"
                  width="362"
                  height="18"
                  rx="9"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="579"
                  width="166"
                  height="65"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="255"
                  y="579"
                  width="160"
                  height="40"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="255"
                  y="490"
                  width="160"
                  height="80"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="255"
                  y="400"
                  width="160"
                  height="80"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="68"
                  width="335"
                  height="324"
                  rx="10"
                  fill="var(--primary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="80"
                  y="401"
                  width="166"
                  height="169"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="490"
                  width="193"
                  height="129"
                  rx="10"
                  fill="var(--accent)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="626"
                  y="490"
                  width="26"
                  height="154"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="424"
                  y="252"
                  width="91"
                  height="140"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="524"
                  y="252"
                  width="93"
                  height="140"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="626"
                  width="26"
                  height="480"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="173"
                  width="242"
                  height="60"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="1"
                  y="68"
                  width="70"
                  height="157"
                  rx="10"
                  fill="var(--bg)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  opacity="0.05"
                  x="1"
                  y="234"
                  width="70"
                  height="259"
                  rx="10"
                  fill="var(--text)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
                <rect
                  x="1"
                  y="502"
                  width="70"
                  height="142"
                  rx="10"
                  fill="var(--secondary)"
                  data-astro-cid-j7pv25f6
                ></rect>{" "}
              </svg>
            </div>
          </div>

          <hr />

          <div className="flex items-center justify-center pt-8">
            <div className="container mx-auto p-8">
              <h1 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                <span className="border-b-8 border-[var(--secondary)]">
                  INFORMATIONS
                </span>
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Cards />
              </div>
            </div>
          </div>

          <hr />

          <FAQPage />

          <hr />

          <Articles />
        </main>

        <aside className="w-full bg-gray-200 p-4 lg:w-1/4">
          <div className="flex items-center justify-center pb-8">
            <Button className="rounded-lg bg-[#1151A2] p-2 text-white hover:bg-[var(--primaryForDark)]">
              Make a submission
            </Button>
          </div>
          <div className="pb-8">
            <h1 className="text-xl font-bold">Templates</h1>
          </div>
          <div className="top-4">
            <h2 className="pb-4 text-xl font-bold ">JOURNAL INFORMATION</h2>
            <div className="flex flex-col justify-start gap-2">
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Journal:</span>{" "}
                AL-KADHIM JOURNAL of Science
              </p>
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Publisher:</span>{" "}
                Imam Al-Kadhum College (IKC)
              </p>
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">ISSN:</span>{" "}
                3007-1429 (P) - 3007-1437 (O)
              </p>
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Discipline:</span>{" "}
                Science (Multidisciplinary)
              </p>
              {/* edit here <p className="pb-3 border-b border-gray-400">DOI: https://doi.org/10.61710/kjcs.v2i1</p> */}
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Media:</span> Printed
                & Online
              </p>
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Language:</span>{" "}
                English
              </p>
              <p className="border-b border-gray-400 pb-3">
                <span className="font-semibold text-black">Country:</span> IRAQ
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

async function Articles() {
  const posts = await getPost();
  const latestTenPosts = posts.slice(-10);

  return (
    <div className="pt-12">
      <h2 className="mb-10 pb-12 text-center text-3xl font-bold md:text-4xl">
        <span className="border-b-8 border-[var(--secondary)]">ARTICLES</span>
      </h2>
      <div className="h-full w-full md:p-14">
        {latestTenPosts.map((post) => (
          <div className="mb-8 border-b border-gray-400 pb-4" key={post.id}>
            <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center">
              <Image
                src={"/PostImages/PostImages.jpg"}
                alt="Post_image"
                width={82}
                height={82}
                className="hidden md:block"
              />
              <Link href={`article/${post.id}`} className="w-full">
                <h3 className="mb-2 break-words text-lg font-semibold md:text-xl">
                  skldglksdhngljksdfnhfdslknhfl;dskhnfdlkjhnkdsnglkdsngdlskgnsklnfg
                </h3>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                target="_blank"
                href={post.doiUrl}
                className="text-sm font-semibold text-gray-700 md:text-[16px]"
              >
                <span className="font-bold">DOI:</span>{" "}
                <span className="text-[var(--primary)]">{post.doiUrl}</span>
              </Link>
              <p className="text-sm font-semibold text-gray-700 md:text-[16px]">
                <span className="font-bold">Author:</span> {post.author}
              </p>
              <Link
                href={post.postUrl}
                className="text-md font-semibold text-gray-700"
              >
                <Button
                  variant={"default"}
                  size={"sm"}
                  className="rounded-lg bg-[var(--primary)] px-6 text-white hover:bg-[var(--accent)]"
                >
                  PDF
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Cards = () => (
  <>
    <div className="flex max-w-sm flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[var(--cards)] p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-10 w-10 text-[var(--accent)] dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>

      <h5 className="mb-2 border-b-4 border-[var(--secondary)] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        For Readers
      </h5>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        We encourage readers to sign up for the publishing notification service
        for this journal...
      </p>
      <a
        href="#"
        className="inline-flex items-start font-medium text-blue-600 hover:underline"
      >
        Learn More
        <svg
          className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>

    <div className="flex max-w-sm flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[var(--cards)] p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-10 w-10 text-[var(--accent)] dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>

      <h5 className="mb-2 border-b-4 border-[var(--secondary)] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        For Authors
      </h5>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Interested in submitting to this journal? We recommend that you review
        the About the Journal page...
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 hover:underline"
      >
        Learn More
        <svg
          className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>

    <div className="flex max-w-sm flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[var(--cards)] p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-10 w-10 text-[var(--accent)] dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>

      <h5 className="mb-2 border-b-4 border-[var(--secondary)] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        For Librarians
      </h5>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        We encourage research librarians to list this journal among their
        library&apos;s electronic journal holdings...
      </p>
      <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 hover:underline"
      >
        Learn More
        <svg
          className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  </>
);

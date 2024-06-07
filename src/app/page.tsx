import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getPost } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen w-full bg-white shadow-md dark:text-black">
      <div className="flex w-full flex-col lg:flex-row">
        <main className="w-full p-4 lg:w-3/4">
          <h1 className="mb-4 text-3xl font-bold text-gray-700">
            Al-Kadhim Journal for Computer Science
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <div className="h-16 w-12">Image</div>
            <p className="w-full md:w-fit">
              The journal aims mainly to contribute to the maturity of
              scientific research and strongly encourages and supports any
              researcher to participate in this maturity. To achieve this goal,
              we welcome all academics and scientists in the sciences to publish
              their scientific products. The publication of this journal
              contributes to the development of science and its impact. In
              addition, it provides a means of discussion for science
              researchers.
            </p>
          </div>

          <div className="flex items-center justify-center bg-gray-50">
            <div className="container mx-auto p-8">
              <h1 className="mb-8 text-center text-2xl font-bold">
                <span className="border-b-2 border-[#1151A2]">
                  INFORMATIONS
                </span>
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Cards />
              </div>
            </div>
          </div>

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
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">ARTICLES</h2>
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
            <Link href={`article/${post.id}`} className="text-sm font-semibold">
              <h3 className="mb-2 text-sm font-semibold md:text-xl">
                {post.title}
              </h3>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              href={post.doiUrl}
              className="text-sm font-semibold text-gray-700 md:text-[16px]"
            >
              DOI:{" "}
              <span className="text-[var(--primaryForDark)]">
                {post.doiUrl}
              </span>
            </Link>
            <p className="text-sm font-semibold text-gray-700 md:text-[16px]">
              Author: {post.author}
            </p>
            <Link
              href={post.postUrl}
              className="text-md font-semibold text-gray-700"
            >
              <Button
                variant={"default"}
                size={"sm"}
                className="rounded-lg bg-[#1151A2] px-6 text-white hover:bg-[var(--AccentForWhite)]"
              >
                PDF
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

const Cards = () => (
  <>
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>

      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        For Readers
      </h5>

      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        We encourage readers to sign up for the publishing notification service
        for this journal...
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>

    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>

      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>

    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>

      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  </>
);

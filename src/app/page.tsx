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
          <div className="flex flex-col justify-around gap-4 pt-4 md:flex-row">
            <div className="h-16 w-12">Image</div>
            <p className="w-full md:w-96">
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
          <div className="sticky top-4">
            <h2 className="pb-4 text-xl font-bold">JOURNAL INFORMATION</h2>
            <div className="flex flex-col justify-start gap-2">
              <p>
                <span className="font-semibold text-black">Journal:</span>{" "}
                AL-KADHIM JOURNAL of Science
              </p>
              <p>
                <span className="font-semibold text-black">Publisher:</span>{" "}
                Imam Al-Kadhum College (IKC)
              </p>
              <p>
                <span className="font-semibold text-black">ISSN:</span>{" "}
                3007-1429 (P) - 3007-1437 (O)
              </p>
              <p>
                <span className="font-semibold text-black">Discipline:</span>{" "}
                Science (Multidisciplinary)
              </p>
              {/* edit here <p>DOI: https://doi.org/10.61710/kjcs.v2i1</p> */}
              <p>
                <span className="font-semibold text-black">Media:</span> Printed
                & Online
              </p>
              <p>
                <span className="font-semibold text-black">Language:</span>{" "}
                English
              </p>
              <p>
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
        <div className="mb-8" key={post.id}>
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

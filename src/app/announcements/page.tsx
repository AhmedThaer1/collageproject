import Aside from "../_components/Aside";
import Bread from "../_components/Bread";

export default function AnnouncementsPage() {
  return (
    <div className="flex w-full bg-white shadow-md">
      <div className="flex w-full flex-col lg:flex-row">
        <main className="w-full p-8 text-black">
          <Bread
            prevTitle={"Current"}
            prevUrl={"/"}
            currentTitle={"announcements"}
            currentUrl={"/announcements"}
          />

          <div className="pt-10">
            <h1 className="text-3xl font-bold">
              There Is No Announcements Right Now
            </h1>
          </div>
        </main>

        <Aside />
      </div>
    </div>
  );
}

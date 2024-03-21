import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-main-bg min-h-screen space-y-6 flex flex-col align-middle justify-center items-center">
      <Navbar />
      <div className="text-main-text-color text-center">
        <h2 className="text-3xl">
          Welcome to
          <span>
            <h1 className="text-4xl font-extrabold">CullinaryChronicles</h1>
          </span>
        </h2>
      </div>
      <Link
        href="/login"
        className="bg-btn-bg text-main-text-color px-4 py-2 rounded-md"
      >
        GET STARTED
      </Link>
    </div>
  );
}

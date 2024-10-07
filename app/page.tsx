import Header from "@/components/Header";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-6 sm:px-12 lg:px-24 mx-auto max-w-screen-xl">
      <Header />
      <Resume />
    </main>
  );
}

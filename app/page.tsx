import Header from "@/components/Header";
import Resume from "@/components/Resume";
import { Spotlight } from "@/components/UI/Spotlight";

export default function Home() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-6 sm:px-12 lg:px-24 mx-auto max-w-screen-xl">
      {/* <Spotlight className="left-[0%] -top-[30%] w-[100%]" /> */}
      <Spotlight className="left-[80%] -top-[10%] h-[40%]" />
      <Spotlight className="left-[40%] top-[10%] h-[110%] " />
      <Header />
      <Resume />
    </main>
  );
}

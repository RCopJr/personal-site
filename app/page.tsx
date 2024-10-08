import Header from "@/components/Sections/Header";
import Resume from "@/components/Sections/Resume";
import { ShootingStars } from "@/components/UI/ShootingStars";
import { Spotlight } from "@/components/UI/Spotlight";
import { StarsBackground } from "@/components/UI/StarsBackground";

export default function Home() {
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 px-6 sm:px-12 lg:px-24 mx-auto max-w-screen-xl">
      <ShootingStars className="fixed -z-10" />
      <StarsBackground className="fixed -z-10" />
      <Header />
      <Resume />
    </main>
  );
}

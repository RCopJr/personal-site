import Header from "@/components/Sections/Header";
import Resume from "@/components/Sections/Resume";
import { ShootingStars } from "@/components/UI/ShootingStars";
import { StarsBackground } from "@/components/UI/StarsBackground";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col px-6 sm:px-12 lg:grid lg:grid-cols-2 lg:gap-4 lg:px-24">
      <ShootingStars className="fixed -z-10" />
      <StarsBackground className="fixed -z-10" />
      <Header />
      <Resume />
    </main>
  );
}

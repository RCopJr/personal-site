import Header from "@/components/Header";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="grid grid-cols-2 px-24 mx-auto max-w-screen-xl">
      <Header />
      <Resume />
    </main>
  );
}

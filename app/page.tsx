import Header from "@/components/Header";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="grid grid-cols-2 h-screen">
      <Header />
      <Resume />
    </main>
  );
}

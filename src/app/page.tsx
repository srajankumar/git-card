import Card from "@/components/CardComponent";
import Theme from "@/components/Theme";
import MyCard from "@/components/MyCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Theme />
      <Card />
      <MyCard />
    </main>
  );
}

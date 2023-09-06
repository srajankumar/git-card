import Card from "@/components/CardComponent";
import Theme from "@/components/Theme";
import MyCard from "@/components/MyCard";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Background />
      <Theme />
      <Card />
      <MyCard />
    </main>
  );
}

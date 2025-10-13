import type { Route } from "./+types/index";
import Hero from "~/Components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev" },
    { name: "description", content: "Welcome to my Website" },
  ];
}

export default function Home() {
  return (
  <main className="max-w-6xl mx-auto px-6 my-8">
  <Hero name="Sumit"/>
</main>);
}

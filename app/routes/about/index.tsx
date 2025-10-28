import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev" },
    { name: "description", content: "Welcome to my Website" },
  ];
}
const AboutPage = () => {
    return ( 
        <>
            <h1 className="text-3xl font-bold text-white mb-2">
                Hey, I am Sumit 
            </h1>


        </>


     );
}
 
export default AboutPage ;
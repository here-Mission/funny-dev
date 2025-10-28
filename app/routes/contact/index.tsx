import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev | Contact" },
    { name: "description", content: "Welcome to my Website" },
  ];
}

const ContactPage = () => {
    return ( 
        <>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                👤Contact Me
            </h2>
        </>
     );
}
 
export default ContactPage;
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev | Blog" },
    { name: "description", content: "Welcome to my Website" },
  ];
}
const BlogPage = () => {
    return ( 
        <>
            <h2 className="text-3xl text-white font-bold
            mb-8">📝 Blog</h2>
        </>
     );
}
 
export default BlogPage;
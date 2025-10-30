import type { Route } from "./+types/index";
import Hero from "~/Components/Hero";
import FeaturedProjects from "~/Components/Featuredprojects";
import type { Project } from "../types";
import type { postMeta } from "../types";
import AboutPreview from "~/Components/Aboutpreview";
import Latespost from "~/Components/Latestpost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev" },
    { name: "description", content: "Welcome to my Website" },
  ];
}

export async function loader({request}: Route.LoaderArgs): Promise<{projects:Project[]; posts:postMeta[]}> {
const url= new URL(request.url);
const [projectRes,postRes] = await Promise.all([
  fetch(`${import.meta.env.VITE_API_URL}/projects`),
  fetch(new URL('/posts-meta.json',url))
]);
if(!projectRes.ok || !postRes.ok){
  throw new Error('Failed to fetch project or posts');
}
const [projects,posts] = await Promise.all([
  projectRes.json(),
  postRes.json(),
]);
// console.log(projects,posts);
return {projects,posts};
  
}

const HomePage=({loaderData}: Route.ComponentProps)=>{
  const {projects,posts}= loaderData;
  return (
  <>
  <FeaturedProjects projects={projects}
  count={2}/>
  <AboutPreview/>
  <Latespost posts={posts}/>
  </>);
}

export default HomePage;

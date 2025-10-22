import type { Route } from "./+types";
import type { Project } from "../types";
import ProjectCard from "~/Components/ProjectCard";
import { useState } from "react";
import Pagination from "~/Components/Pagination";

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[]}> {
    const res= await fetch('http://localhost:8000/projects');
    const data= await res.json();
    return {projects: data};
    
}

const ProjectsPage = ({loaderData}: Route.ComponentProps)=>{
    const {projects}= loaderData as { projects: Project[] };
    const [currentpage,setCurrentpage]= useState(1);
    const ProjectperPage=10;
    const totalPages=Math.ceil((projects.length) / ProjectperPage);

    // Get Current Page Projects
    const IndexOfLast= currentpage * ProjectperPage;
    const IndexOfFirst= IndexOfLast - ProjectperPage;
    const currentProjects = projects.slice(IndexOfFirst,IndexOfLast);

    //Pagination Logic

    // const renderPagination = ()=> (
        
        
    // )
    

    

    return ( 
        <>
            <h2 className="text-3xl text-white font-bold
            mb-8">🗂️Projects</h2>
            <div  
            className="grid gap-6 sm:grid-cols-2">

            {currentProjects.map((project)=>(
                <ProjectCard project={project}/>
                
            
                
                
                ))}
                
            </div>
            <Pagination totalPages={totalPages}
            currentpage={currentpage} 
            onpageChange={setCurrentpage} />
        </>
        
     );
};
 
export default ProjectsPage;
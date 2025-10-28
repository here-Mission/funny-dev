import type { Route } from "./+types";
import type { Project } from "../types";
import ProjectCard from "~/Components/ProjectCard";
import { useState } from "react";
import Pagination from "~/Components/Pagination";
import { BiCategory } from "react-icons/bi";

export async function loader({request}:Route.LoaderArgs):Promise<{projects:Project[]}> {
    const res= await fetch('http://localhost:8000/projects');
    const data= await res.json();
    return {projects: data};
    
}

const ProjectsPage = ({loaderData}: Route.ComponentProps)=>{

    const [selectedcategory,setselectedCategory]=useState('All');
    const [currentpage,setCurrentpage]= useState(1);
    const ProjectperPage=10;
    const {projects}= loaderData as { projects: Project[] };
    

    //Filter Some Projects
    const categories= ['All', ...new Set(projects.map((project)=>project.category))]
    const filteredprojects= selectedcategory=='All'? projects :
    projects.filter((project)=>project.category==selectedcategory);
    const totalPages=Math.ceil((filteredprojects.length) / ProjectperPage);



    // Get Current Page Projects
    const IndexOfLast= currentpage * ProjectperPage;
    const IndexOfFirst= IndexOfLast - ProjectperPage;
    const currentProjects = filteredprojects.slice(IndexOfFirst,IndexOfLast);

    //Pagination Logic

    // const renderPagination = ()=> (
        
        
    // )
    

    

    return ( 
        <>
            <h2 className="text-3xl text-white font-bold
            mb-8">🗂️Projects</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category)=> (
                <button key={category} onClick={()=>{
                    setselectedCategory(category);
                    setCurrentpage(1);
                }} className={`px-2 py-1 rounded-text-sm ${selectedcategory
                    === category? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}
                }`}>
                {category}
                </button>
                )
            )}
            </div>
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
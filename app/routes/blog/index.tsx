import { URL } from "url";
import type { Route } from "./+types";
import { Link } from "react-router";
import type { postMeta } from "../types";
import PostCard from "~/Components/PostCard";
import { useState } from "react";
import Pagination from "~/Components/Pagination";
import PostFilter from "~/Components/PostFilter";

export async function loader({request}:Route.LoaderArgs):Promise<{posts:postMeta[]}>{
    const url= new URL('/posts-meta.json',request.url);
    const res= await fetch(url.href);
    if(!res.ok) throw new Error('Failed to fetch');
    const data= await res.json();
    return {posts: data};



}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev | Blog" },
    { name: "description", content: "Welcome to my Website" },
  ];
}
const BlogPage = ({loaderData}:Route.ComponentProps) => {
    const {posts} = loaderData;
    // console.log(posts);
    const [searchQuery,SetsearchQuery]=useState("");
    const [currentPage,setCurrentPage]= useState(1);
    const postperpage=10;
    const filteredpost= posts.filter((post)=>{
      const query= searchQuery.toLowerCase();
      return(
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      )

    })
    const totalPages= Math.ceil((filteredpost.length)/postperpage);
    const IndexOfLast= currentPage*postperpage;
    const IndexOfFirst= IndexOfLast- postperpage;
    const currentposts= filteredpost.slice(IndexOfFirst,IndexOfLast);

    return ( 
        <>
        <div className="max-w-3xl mx-auto mt-10 px-6
        y-6 bg-gray-900">
            <h2 className="text-3xl text-white font-bold
            mb-8">📝 Blog</h2>

            <PostFilter searchQuery={searchQuery}
            onSearchChange={(query)=>{
              SetsearchQuery(query);
              setCurrentPage(1);
              }}/>
              <div className="space y-8">
                {currentposts.length===0?(
                  <p className="text-red-700 text-center">
                    No Post Found
                  </p>
                ):(currentposts.map((post)=>(
              <PostCard post={post} key={post.slug}/>
              
            )))}
              </div>
            {
              totalPages>1 && (
                <Pagination
                currentpage={currentPage}
                totalPages={totalPages}
                onpageChange={(page)=>setCurrentPage(page)} />

              )
            }
            </div>
        </>
     );
}
 
export default BlogPage;
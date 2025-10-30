import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { postMeta } from "../types";
import { Link } from "react-router";
import { useState } from "react";
import Pagination from "~/Components/Pagination";
type BlogPostProps={
    loaderData:{
        postMeta: postMeta;
        markdown: string;
    };
};

export async function loader({request,params}: Route.LoaderArgs):
Promise<any>{
        const { slug }= params;
        console.log(slug)
        const url = new URL('/posts-meta.json',request.url);
        const res= await fetch(url.href);
        if(!res.ok) throw new Error("URL NOT LOADED");
        const index= await res.json();
        const postMeta= index.find((post:postMeta)=> post.slug === slug);
        if(!postMeta) throw new Response("Post Meta URL Not Working",{status:404});

        //Import Raw Markdown
        const markdown= await import(`../../posts/${slug}.md?raw`);

        return{
            postMeta,
            markdown: markdown.default
        };

    }

const BlogDetailsPage = ({loaderData}: BlogPostProps) => {

    const {postMeta,markdown}= loaderData;
    // console.log(postMeta,markdown);
    



    


    return ( 
        <>
        <div className="prose prose-invert max-w-3xl mx-auto px-6 py-12 bg-gray-900">
        <h1 className="text-3xl font-bold text-blue-400 mb-2 hover: text-blue-800">
        {postMeta.title}
        </h1>
        <p className="text-sm text-gray-400 mb-6">
            {new Date(postMeta.date).toLocaleDateString()}
        </p>
        <div className="max-w-none mb-12">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        <Link to="/blog" className="inline-block bg-blue-600
        text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            🏃‍♂️💨Simon Go Back
        </Link>
    
    </div>
        </>
     );
}
 
export default BlogDetailsPage;
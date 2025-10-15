import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./routes/layout/Home.tsx',[index("routes/home/index.tsx")]),
    layout('./routes/layout/Main.tsx',[route('about','./routes/about/index.tsx'),
    route('contact','./routes/contact/index.tsx'),
    route('projects','./routes/projects/index.tsx'),
     route('blog','./routes/blog/index.tsx'),]),
    

] satisfies RouteConfig;

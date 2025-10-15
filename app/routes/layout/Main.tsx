import { Outlet } from "react-router";
import Hero from "~/Components/Hero";

const MainLayout = () => {
    return ( 

        <>
           <section className="max-w-6xl mx-auto px-6 my-8">
            <Outlet/>
           </section>
        </>
     );
}
 
export default MainLayout;
import { Outlet } from "react-router";
import Hero from "~/Components/Hero";

const HomeLayout = () => {
    return ( 

        <>
           <Hero name="Sumit"/>
           <section className="max-w-6xl mx-auto px-6 my-8">
            <Outlet/>
           </section>
        </>
     );
}
 
export default HomeLayout;
import React from "react";
import Todolist from "../component/Todolist";
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
import TodoAnalytic from "./TodoAnalytic"

function Home (){
    return(
        <div>
            <NavBar/>
            <section>
                <Todolist/>
            </section>
            <Footer />
            <TodoAnalytic/>
        </div>
    )
}
export default Home;
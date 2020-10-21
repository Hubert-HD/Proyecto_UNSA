import React, {useEffect} from "react"

import "../../styles/dashboard.scss";

import SideMenu from "../organisms/SideMenu";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home.jsx';
import ReportCard from '../pages/ReportCard.jsx';
import Course from '../pages/Course.jsx';
import CourseCalc from '../pages/CourseCalc.jsx';
import Progress from '../pages/Progress.jsx';
import NotFound from '../pages/NotFound.jsx';


const Dashboard = () => {
    
    useEffect(() => {
            // Elementos
            var menuButton = document.querySelector(".menuButton");
            var sidebar = document.querySelector(".container-sidebar");
            var content = document.querySelector(".container-content");
        
            // Añadir clase
            if (window.matchMedia("(max-width: 600px)").matches){
                sidebar.classList.add("sidebar-contracted");
                content.classList.add("content-expanded");
            }
            else{
                sidebar.classList.add("sidebar-expanded");
                content.classList.add("content-contracted");
            }
            
            const handleMouseClick = (event) => {
                event.preventDefault();
                sidebar.classList.toggle("sidebar-expanded");
                sidebar.classList.toggle("sidebar-contracted");
                content.classList.toggle("content-contracted");
                content.classList.toggle("content-expanded");
            }
            // Remplazo de clase
            menuButton.addEventListener("click", handleMouseClick);

            return () => {
                menuButton.removeEventListener("click", handleMouseClick);
            };
        }
    , []);
    
    return (
        <div className="container-dashboard">
            <SideMenu/>
            <div className="container-content">
                <Header />
                <div className="container-main">
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/libreta-notas" component={ ReportCard } />
                        <Route path="/calculadora-cursos/:curso" component={ Course } />
                        <Route path="/calculadora-cursos" component={ CourseCalc } />
                        <Route path="/progreso" component={ Progress } />
                        <Route component={ NotFound } />
                    </Switch> 
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;
import React, {useEffect} from "react"

import "../../styles/dashboard.scss";

import SideMenu from "../organisms/SideMenu";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import { Route, Switch } from "react-router-dom";
import { AppProvider } from "../../context/AppContext.jsx";
import GraphicPage from '../pages/GraphicPage.jsx';
import ReportCardPage from '../pages/ReportCardPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import CoursesPages from "../pages/CoursesPage";
import CalculatorPage from "../pages/CalculatorPage";
import TasksPage from "../pages/TasksPage";
import CurriculumPage from "../pages/CurriculumPage";

const Dashboard = () => {

  useEffect(() => {
    window.addEventListener("click", handleEvent);
    return () => {window.removeEventListener("click", handleEvent)}
  }, []);
  
  const handleEvent = (event) => {
    var content = document.querySelector(".container-content");
    var sidebar = document.querySelector(".container-sidebar");

    if(window.matchMedia("(max-width: 600px)").matches){
      //si modo celu
      event.stopPropagation()
      if(sidebar && !sidebar.contains(event.target)){
        if(sidebar.classList.contains("sidebar-expanded")){
          sidebar.classList.toggle("sidebar-expanded");
          sidebar.classList.toggle("sidebar-contracted");
          content.classList.toggle("content-contracted");
          content.classList.toggle("content-expanded");
        }
      }
    }    
  }
  
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
      event.stopPropagation()
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
    <AppProvider>
      <div className="container-dashboard">
        <SideMenu/>
        <div className="container-content">
          <Header />
          <div className="container-main">
            <Switch>
              <Route path="/" exact component={ ReportCardPage } />
              <Route path="/cursos" component={ CoursesPages } />
              <Route path="/tareas" component={ TasksPage } />
              <Route path="/malla-curricular" component={ CurriculumPage } />
              <Route path="/calculadora" component={ CalculatorPage } />
              <Route path="/estadisticas" exact component={ GraphicPage } />
              <Route component={ NotFoundPage } />
            </Switch> 
          </div>
          <Footer />
        </div>
      </div>
    </AppProvider>
    )
  }
  
  export default Dashboard;
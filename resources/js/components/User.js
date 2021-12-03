import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./topbar/topbar";
//import Header from './components/header/Header';
//import Home from "./pages/home/Home";
import Home from './pages/home/Home';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import ContactUs from "./pages/contactus/ContactUs";
import ManagerHome from "./pages/manager/managerHome";
import ManagerBuildingCrud from "./pages/manager/ManagerBuildingCrud";
import ManagerApartmentCrud from "./pages/manager/ManagerApartmentCrud";
import ManagerGardenCrud from "./pages/manager/ManagerGardenCrud";
//import ManagerPoolCrud from "./pages/manager/ManagerPoolCrud";
import ManagerPoolCrud from "./pages/manager/ManagerPoolCrud";
import ManagerPlantCrud from "./pages/manager/ManagerPlantCrud";
import ManagerVisitorCrud from "./pages/manager/ManagerVisitorCrud";
import AdminHome from "./pages/admin/adminHome";
import AdminBuildingCrud from "./pages/admin/admin_building_crud";
import AdminGardenCrud from "./pages/admin/admin_garden";
import AdminApartmentCrud from "./pages/admin/admin_owner_crud";
import AdminVisitorCrud from "./pages/admin/admin_visitor";
import AdminVisitorCrudGarden from "./crud/crud_visitor_garden"
import ResidentRequestService from './pages/resident/resident_request_service';
import ResidentServiceDetails from './pages/resident/resident_service_details';
import ResidentInquiry from './pages/resident/resident_inquiry';
import Footer from './footer/Footer';

import UserData from "./data/userData";
import OwnerData from "./data/OwnerData";
import AptData from "./data/AptData";
import BuildingData from "./data/BuildingData";
import IncidentData from "./data/IncidentData";
import VisitorData from "./data/VisitorData";
import ServiceRequestData from "./data/ServiceRequestData";
import GardenData from "./data/GardenData";
import PlantData from "./data/PlantData";
import CrudManager from "./crud/crud_manager";
import VisitorHome from "./pages/visitor/visitor_home";

import VisitApt from "./pages/visitor/visit_apartment";

import VisitGarden from "./pages/visitor/visit_garden";
import CrudApartment from "./crud/crud_apartment";
import CrudService from "./crud/crud_service_request";

import {
  saveItemToStorage,
  getItemFromStorage,
  removeItemFromStorage,
} from "./services/sessionStorage";
import ManagerIncidentCrud from "./pages/manager/ManagerIncidentCrud";

import ResidentHome from "./pages/resident/residentHome";
import Services from "./pages/services/Services";
// import Chat from "./pages/chat/chat";
import Chat from './Chat/Chat';
import Join from './Join/Join';
import AdminDashboard from "./pages/admin/admin_dashboard";
import FileUpload from "./pages/resident/file_Upload";

import 'bootstrap/dist/css/bootstrap.min.css';
function User() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        Boolean(getItemFromStorage("user"))
      );
    
      const handleLogout = () => {
        removeItemFromStorage("user");
        setIsLoggedIn(false);
      };
    
      const handleLogin = (email) => {
        saveItemToStorage("user", email);
        setIsLoggedIn(true);
      };
    return (
        <Router>
      <div className="container-fluid">
      <TopBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/wdm-phase3/">
          <Home />
        </Route> */}
        
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/manager_home">
          <ManagerHome />
        </Route>
        <Route exact path="/service_crud">
          <CrudService/>
        </Route>
        <Route exact path="/manager_building_crud">
          <ManagerBuildingCrud />
        </Route>
        <Route exact path="/manager_apartment_crud">
          <ManagerApartmentCrud />
        </Route>
        <Route exact path="/manager_owner_crud">
          <ManagerApartmentCrud />
        </Route>
        <Route exact path="/manager_garden">
          <ManagerGardenCrud />
        </Route>
      
        <Route exact path="/manager_pool">
          <ManagerPoolCrud />
        </Route>
        <Route exact path="/manager_plant">
          <ManagerPlantCrud />
        </Route>
        <Route exact path="/manager_visitor">
          <ManagerVisitorCrud />
        </Route>
        <Route exact path="/manager_incident">
          <ManagerIncidentCrud />
        </Route>
        <Route exact path="/admin_home">
          <AdminHome />
        </Route>
        <Route exact path="/admin_dashboard">
          <AdminDashboard/>
        </Route>
        <Route exact path="/admin_building_crud">
          <AdminBuildingCrud />
        </Route>
        <Route exact path="/admin_garden_crud">
          <AdminGardenCrud />
        </Route>
        <Route exact path="/admin_owner_crud">
          <AdminApartmentCrud />
        </Route>
        <Route exact path="/admin_visitor_crud">
          <AdminVisitorCrud/>
        </Route>
        <Route exact path="/admin_visitor_crud_garden">
          <AdminVisitorCrudGarden/>
        </Route>
        <Route exact path="/resident_home">
          <ResidentHome/>
        </Route>
        
        <Route exact path="/resident_request_service">
          <ResidentRequestService />
        </Route>
        <Route exact path="/resident_service_details">
          <ResidentServiceDetails />
        </Route>
        <Route exact path="/resident_inquiry">
          <ResidentInquiry />
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        {/* <Route exact path="/chatwithus">
          <Chat/>
        </Route> */}
        
        <Route exact path="/userDetails">
           <UserData/>
        </Route>
        <Route exact path="/OwnerDetails">
          <OwnerData/>
        </Route>
        <Route exact path="/apartment_details">
          <AptData/>
        </Route>
        <Route exact path="/building_details">
          <BuildingData/>
        </Route>
        <Route exact path="/incident_details">
          <IncidentData/>
        </Route>
        <Route exact path="/visitor_details">
          <VisitorData/>
        </Route>
        <Route exact path="/service_request_details">
          <ServiceRequestData/>
        </Route>
        <Route exact path="/garden_details">
          <GardenData/>
        </Route>
        <Route exact path="/plant_details">
          <PlantData/>
        </Route>
        <Route exact path="/visitor_home">
          <VisitorHome/>
        </Route>
        
        <Route exact path="/visitor_Apt">
        <VisitApt/>
        </Route>
        <Route exact path="/visitor_Garden">
        <VisitGarden/>
        </Route> 
        <Route exact path="/crud_apartment">
          <CrudApartment/>
        </Route>

        <Route exact path="/file_Upload">

        <FileUpload/>

        </Route>
        <Route exact path="/crud_manager">

    <CrudManager/>

    </Route>  

        <Route path ="/join" exact component = {Join}/>

        <Route path ="/chat" component = {Chat}/>
      </Switch>
      <Footer />
      </div>
    </Router>
  
    );
}
export default User;
// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(< User/>, document.getElementById('user'));
}
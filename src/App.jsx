import {Routes, Route} from "react-router-dom";

import './App.css'
import MainLayout from './layout/MainLayout'
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";


function App() {
 

  return (
    <Routes>
      <Route path="/" element= {<MainLayout/>}>

      {/*Default Page*/}
      <Route index element= {<Dashboard/>}/>

      {/*Outer Pages*/}
      <Route path="users" element= {<Users/>}/>
      <Route path="analytics" element= {<Analytics/>}/>
      <Route path="settings" element= {<Settings/>}/>
      </Route>


    </Routes>

  )
}

export default App

import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import DogEdit from "./components/DogEdit/DogEdit";
import DogUpdate from "./components/DogUpdate/DogUpdate";
import DogCreate from "./components/DogCreate/DogCreate";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import UserCreate from "./components/Login/UserCreate/UserCreate";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/admin/contact" component={Contact} />
      <Route exact path="/home/dog/create" component={DogCreate} />
      <Route exact path="/home/dog/edit" component={DogEdit} />
      <Route exact path="/home/dog/update/:id" component={DogUpdate} />
      <Route exact path="/home/user/login" component={Login} />
      <Route exact path="/home/user/create" component={UserCreate} />
      <Route exact path="/home/:idRaza" component={Detail} />
    </React.Fragment>
  );
}

export default App;

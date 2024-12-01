import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import DogCreate from "./components/DogCreate/DogCreate";
import DogUpdate from "./components/DogUpdate/DogUpdate";
import DogEdit from "./components/DogEdit/DogEdit";
import DogDetail from "./components/DogDetail/DogDetail";
import UserLogin from "./components/Login/Login";
import UserCreate from "./components/Login/UserCreate/UserCreate";
// import Image from "./components/DogCreate/Image/Image";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing} />
      {/* <Route exact path="/Image" component={Image} /> */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/admin/contact" component={Contact} />
      <Route exact path="/home/dog/create" component={DogCreate} />
      <Route exact path="/home/dog/update/:id" component={DogUpdate} />
      <Route exact path="/home/dog/edit" component={DogEdit} />
      <Route exact path="/home/dog/detail/:id" component={DogDetail} />
      <Route exact path="/home/user/login" component={UserLogin} />
      <Route exact path="/home/user/create" component={UserCreate} />
    </React.Fragment>
  );
}

export default App;

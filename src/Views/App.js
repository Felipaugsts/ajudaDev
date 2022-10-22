import React, { Component } from "react";
import Home from "./Home/HomeView";
import Login from "./Auth/Login";
import Nav from "../Components/Navbar/Nav";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import rootReducer from "../Model/Store";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NewItem from "./AddNewItem/NewItem";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<NewItem />} />
            <Route path="/list/:id" element={<NewItem />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}
export default App;

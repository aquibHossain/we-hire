import './App.css';
import Home from './Pages/HomePart/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Pages/About/About';
import AddCategories from './Pages/AdminPart/AddCategories/AddCategories';
import NavBar from './Pages/Header/NavBar/NavBar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Search from './Pages/Search/Search';
import AddRent from './Pages/AddRent/AddRent';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/AdminPart/MakeAdmin/MakeAdmin';
import Details from './Details/Details';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
import SearchCategory from './SearchCategory/SearchCategory';
import Find from './Find/Find';


function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
           <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/search">
            <Search></Search>
          </Route>
          <Route path="/search/:category">
            <SearchCategory></SearchCategory>
          </Route>
          <Route path="/find">
            <Find></Find>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute >
          <PrivateRoute path="/addrent">
            <AddRent></AddRent>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
    </Router>
        </AuthProvider>
    </div>
  );
}

export default App;

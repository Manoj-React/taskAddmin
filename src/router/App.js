
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../page/login/login';
import Sign from '../page/login/sign';
import Signup from '../page/login/signup';
import Forget from '../page/login/forget';
import NewPasswordget from '../page/login/newPassword';
import Otp from '../page/login/otp';
import TextEditor from '../page/login/textEditor';
import ArticleList from '../page/login/addArticle';
import CreateArticle from '../page/login/createArticle';
import Seo from '../page/articles/SeoForm';
import Dashboard from '../page/layout/Dashbord';
import CreateCatagery from '../page/Catagery/CreateCatagery';
import CreateTags from '../page/tags/CreateTags';
import CheckBox2 from '../page/layout/CheckBox2';
import Banner from '../page/banner/Banner';
import Categories from '../page/login/Categories';


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Dashboard" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Forget" component={Forget} />
          <Route exact path="/NewPasswordget" component={NewPasswordget} />
          <Route exact path="/Otp" component={Otp} />
          <Route exact path="/TextEditor" component={TextEditor} />
          <Route exact path="/ArticleList" component={ArticleList} />
          <Route exact path="/CreateArticle" component={CreateArticle} />
          <Route exact path="/Seo" component={Seo} />
          <Route exact path="/Home" component={Dashboard} />
          <Route exact path="/CreateCatagery" component={CreateCatagery} />
          <Route exact path="/CreateTags" component={CreateTags} />
          <Route exact path="/CheckBox2" component={CheckBox2} />
          <Route exact path="/Banner" component={Banner} />
          <Route exact path="/Categories" component={Categories} />

             
         </Switch>
      </Router>
    </div>
  );
}

export default App;

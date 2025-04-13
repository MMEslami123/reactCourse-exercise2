import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider dir="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

// S19 E01     ==>     intro
// S19 E02     ==>     project structer
// S19 E03     ==>     fonts
// S19 E04     ==>     install packages
// S19 E05     ==>     react-icons package
// S19 E06     ==>     json-server package
// S19 E07     ==>     routes
// S19 E08     ==>     navbar component
// S19 E09     ==>     ArticleItem component
// S19 E10     ==>     Home page - part1
// S19 E11     ==>     Home page - part2              --> request to api should be in useEffect => (execute just one)
// S19 E12     ==>     AddArticle Page - part1
// S19 E13     ==>     AddArticle Page - part2
// S19 E14     ==>     AddArticle Page - part3
// S19 E15     ==>     AddArticle Page - part4
// S19 E16     ==>     AddArticle Page - part5
// S19 E17     ==>     AddArticle Page - part6
// S19 E18     ==>     AddArticle Page - part6
// S19 E19     ==>     Article Page - part1
// S19 E20     ==>     Article Page - part2
// S19 E21     ==>     Article Page - part3
// S19 E22     ==>     Article Page - part4
// S19 E23     ==>     Article Page - part5
// S19 E24     ==>     Article Page - part6
// S19 E25     ==>     Article Page - part7
// S19 E26     ==>     EditArticle Page - part1
// S19 E27     ==>     EditArticle Page - part2
// S19 E28     ==>     EditArticle Page - part3
// S19 E29     ==>     EditArticle Page - part4

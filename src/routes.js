import Home from "./pages/home/Home";
import EditArticle from "./pages/editArticle/EditArticle";
import Article from "./pages/article/Article";
import AddArticle from "./pages/addArticle/AddArticle";
import About from "./pages/about/About";
const Routes = [
  { path: "/", element: <Home /> },
  { path: "/edit-article/:articleId", element: <EditArticle /> },
  { path: "/article/:articleId", element: <Article /> },
  { path: "/add-article", element: <AddArticle /> },
  { path: "/about", element: <About /> },
];
export default Routes;

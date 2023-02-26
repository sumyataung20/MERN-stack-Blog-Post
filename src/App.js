import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
     return (
          <div>
               <Navbar />
               <div className="max-w-screen-md mx-auto pt-20">
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/article/:name" element={<Article />} />
                         <Route
                              path="/articleslist"
                              element={<ArticlesList />}
                         />
                         <Route path="/about" element={<About />} />
                         <Route path="*" element={<NotFound />} />
                    </Routes>
               </div>
          </div>
     );
}

export default App;

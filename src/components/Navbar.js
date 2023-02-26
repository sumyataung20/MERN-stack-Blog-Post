import { Link } from "react-router-dom";
export default function Navbar() {
     return (
          <nav className="border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white">
               <div className="flex justify-between">
                    <h1 className="pl-6 pr-6 py-4 ml-6 font-semibold font-serif text-2xl">
                         Blog Posts
                    </h1>

                    <ul>
                         <li className="inline-block py-4">
                              <Link to="/" className="pl-6 pr-8 font-light">
                                   Home
                              </Link>
                         </li>
                         <li className="inline-block py-4">
                              <Link
                                   to="/about"
                                   className="pl-6 pr-8 font-light"
                              >
                                   About
                              </Link>
                         </li>

                         <li className="inline-block py-4">
                              <Link
                                   to="/articleslist"
                                   className="pl-6 pr-8 font-light"
                              >
                                   Articles
                              </Link>
                         </li>
                    </ul>
               </div>
          </nav>
     );
}

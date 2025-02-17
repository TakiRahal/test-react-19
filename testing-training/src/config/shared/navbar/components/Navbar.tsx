import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Testing ReactJS</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <Link to="/signin" className="github-button"
                           data-size="large" data-icon="octicon-star" data-show-count="true"
                              aria-label="Star themesberg/landwind on GitHub">LogIn</Link>
                    </div>
                    <Link to="/signup"
                          className="!text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Register</Link>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                     id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/"
                               className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                  aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/marketplace"
                                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                        </li>
                        <li>
                            <Link to="/about"
                                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

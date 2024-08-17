import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import {BrowserRouter, Route, Switch, Link, Routes} from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div class="container-fluid px-0">
                            <Link to="/">
                                <a class="navbar-brand font-weight-bolder ms-sm-3" rel="tooltip" title="AI App Market
                                " target="_blank" href="./index.html">
                                    Viettel Telecom
                                </a>
                            </Link>
                            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon mt-2">
                                <span class="navbar-toggler-bar bar1"></span>
                                <span class="navbar-toggler-bar bar2"></span>
                                <span class="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                            <ul class="navbar-nav navbar-nav-hover ms-auto">
                                <Link to="/agent">
                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" href="./agent.html" aria-expanded="false">
                                    <i class="material-icons opacity-6 me-2 text-md">dashboard</i>
                                    Agent
                                    </a>
                                </li>
                                </Link>
                                <Link to="/tool">
                                    <li class="nav-item dropdown dropdown-hover mx-2">
                                        <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" href="./tool.html" aria-expanded="false">
                                        <i class="material-icons opacity-6 me-2 text-md">view_day</i>
                                        Tools
                                        </a>
                                    </li>
                                </Link>

                                <li class="nav-item dropdown dropdown-hover mx-2">
                                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" href="./" aria-expanded="false">
                                    <i class="material-icons opacity-6 me-2 text-md">article</i>
                                    Monitoring
                                    </a>
                                </li>

                                <li class="nav-item my-auto ms-3 ms-lg-0">
                                    <a  class="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Upgrade to Business</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
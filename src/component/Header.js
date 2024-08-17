import '../assets/css/nucleo-svg.css'
import '../assets/css/nucleo-icons.css'
import '../assets/css/material-kit.css'
import '../assets/css/material-icon.css'
import image_background from '../assets/img/viettel.jpg';

const Header = ({title, description}) => {
    return (
        <header class="header-2">
        <div 
        className="page-header min-vh-75 relative" 
        style={{ backgroundImage: `url(${image_background})` }}>
            <span class="mask bg-gradient-primary opacity-4"></span>
            <div class="container">
            <div class="row">
                <div class="col-lg-7 text-center mx-auto">
                <h1 class="text-white pt-3 mt-n5">{title}</h1>
                <p class="lead text-white mt-3"> {description} </p>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
}

export default Header;
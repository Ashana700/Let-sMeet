import './Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";


const Header = () => {
    
  return (
  
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <div className="logo" >
    <img src="https://vir2ue.com/Microsoft-Teams-Phone-System-Direct-Routing/images/ms-teams-logo.png" />     {/*logo of MS Teams*/}
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <div class="topnav-right" className="home">
        <a href="/">Home</a>                                                                             {/* directs the to home page */}
    </div>
 
</div>
</nav>
    );

};

export default Header;
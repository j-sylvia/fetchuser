import {Outlet, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Layout(){
    return (
        <div>
        <Navbar bg="primary">
        
        <Nav className="justify-content-end" style={{ width: "100%",marginRight:'90px' }}>
        <Link style={{color:'black',fontSize:'large',margin:'10px 20px',fontWeight:'bold'}} to="/"><li tabindex="1">Home</li></Link>
                
           <Link style={{color:'black',fontSize:'large',margin:'10px 20px',fontWeight:'bold'}} to="/Displayfulldetails"><li tabindex="2">Display Full Details</li></Link> 
          
        </Nav>
      
    </Navbar>
        <Outlet></Outlet>
        </div>
    )
}
export default Layout;
import { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


const baseURL = "https://my-json-server.typicode.com/j-sylvia/ajax/userslist";

function Displayfulldetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setUser(res.data);
      })
      .catch(err=>console.log(err));
  }, []);

  
  

  if (!user) return null;

  return (
    <div className='container'>
    
    <Row xs={1} md={1} lg={2} className="g-1">
    
        <Table responsive="lg" className="table-bordered" striped="columns">
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserName</th>
            <th>PhoneNumber</th>
            <th>Address</th>
            <th>Website</th>
            <th>ZipCode</th>
            <th>Location</th>
            <th>Company</th>
            <th>CatchPhrase</th>
           
          </tr>
        </thead>
        <tbody>
        {user.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>{user.address.suite}, {user.address.street}, {user.address.city}</td>
            <td>{user.website}</td>
            <td>{user.address.zipcode}</td>
            <td>Lat:{user.address.geo.lat} Long:{user.address.geo.lng}</td>
            <td>{user.company.name}</td>
            <td>{user.company.catchPhrase}</td>
           
          </tr>
          ))}
        </tbody>
      </Table>     
      
     
    </Row>
    
    </div>
  );
}

export default Displayfulldetails;

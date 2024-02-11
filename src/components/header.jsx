import React from 'react'; 
 
const Header = (student) => { 
  return ( 
    <div style={{textAlign:'center',padding:'15px'}} > 
          <h4><b>PERSONAL INFO:</b></h4>
         <table style={{borderCollapse: 'collapse',textAlign:'left'}}>
            <tbody>
                <tr>
                   <td><b>Name:</b></td>
                   <td>{student.Name}</td>
                </tr>
                <tr>
                    <td><b>Email:</b></td>
                    <td>{student.Email}</td>
                </tr>
                <tr> 
                    <td><b>Phone:</b></td>
                    <td>{student.Phone}</td>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                    <td>{student.Address}</td>
                </tr>
            </tbody>
         </table>
    </div>

  ); 
}; 
 
export default Header;  
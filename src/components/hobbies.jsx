import React from "react";
const Hobbies = (hobbie) => { 
    return ( 
      <div style={{display: 'felx',justifyContent:'center',textAlign:'center'}}>  
         <h3 ><b>HOBBIES :</b></h3>
           <table style={{borderCollapse: 'collapse',width:'100%',textAlign:'left'}}>
              <tbody>
                  <tr>
                     <td><b></b></td>
                     <td>{hobbie.hobbie1}</td>
                  </tr>
                  <tr>
                     <td><b></b></td>
                     <td>{hobbie.hobbie2}</td>
                  </tr>
              </tbody>
           </table>
      </div>
  
    ); 
  }; 
   
  export default Hobbies;  
import React from 'react'; 
 
const Education = (student) => { 
  return ( 
    <div style={{justifyContent:'left',textAlign:'center'}}> 
        <h3><b>EDUCATIONAL INFO:</b></h3>
         <table style={{borderCollapse: 'collapse',textAlign:'left'}}>
            <tbody>
                <tr>
                   <td><b>Degree :</b></td>
                   <td>{student.degree}</td>
                </tr>
                <tr>
                    <td><b>University :</b></td>
                    <td>{student.University}  </td>
                </tr>
                <tr> 
                    <td><b>Passed Out: </b></td>
                    <td>{student.year}</td>
                </tr>
                <tr>
                    <td><b>City:</b></td>
                    <td>{student.City}</td>
                </tr>
            </tbody>
         </table>
    </div>

  ); 
}; 
 
export default Education;  
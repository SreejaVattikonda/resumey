import React from 'react'; 
 
const Exp = (student) => { 
  return ( 
    <div style={{display: 'felx',justifyContent:'center',textAlign:'center'}}> 
        <h3><b>EXPERIENCE:</b></h3>
         <table style={{borderCollapse: 'collapse',width:'100%',textAlign:'left'}}>
            <tbody>
                <tr>
                   <td><b>2026 -2027</b></td>
                   <td>{student.skills}</td>
                </tr>
                <tr>
                    <td><b>Hyderabad,India:</b></td>
                    <td>intern for an Year</td>
                </tr>
                <tr>
                    <td>  </td>
                    <td>During this period , i have done intern and developed a mobile app to update.</td><br />
                    <td>i have learnt these in the intern</td>
                </tr>
                <tr>
            
                <td> </td>
                    <td><ol>
                       <li> Working with layouts</li>
                        <li>Implementation of explicit and implicit intnets</li>
                        <li>Working with frame layout and Fragments</li>
                    </ol></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
         </table>
    </div>

  ); 
}; 
 
export default Exp;  
import React from 'react'; 
 
const Skills = (student) => { 
  return ( 
    <div style={{display: 'felx',justifyContent:'center',textAlign:'center'}}> 
      <h3><b>SKILLS:</b></h3>
         <table style={{borderCollapse: 'collapse',width:'100%',textAlign:'left'}}>
            <tbody>
                <tr>
                   <td><b></b></td>
                   <td>{student.skills}</td>
                </tr>
            </tbody>
         </table>
    </div>

  ); 
}; 
 
export default Skills;  
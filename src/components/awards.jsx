import React from "react";
const Award =(award)=>{
    return(
        <div style={{display: 'felx',justifyContent:'center',textAlign:'left'}}>
            <h3>Awards & Achivements</h3>
             <table style={{borderCollapse: 'collapse',width:'100%',textAlign:'center'}}>
            </table> 
            <ul>
                <li>
                {award.sports}
                </li>
                <li>{award.club}</li>
            </ul>
        </div>
        
    )
};
export default Award;
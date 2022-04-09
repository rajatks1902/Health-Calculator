import React from "react";

export default function Table(props){
    return(
        <main  className="value">
           <table className="table1">
               <tr>
               <th>micronutients</th>
               <th>Value</th>
               <th>Unit</th>
               </tr>
               <tr>
                <td>Calories</td>
                <td>0</td>
                <td>Kcal</td>
               </tr>
               <tr>
                <td>Protien</td>
                <td>0</td>
                <td>Gram</td>
               </tr>
               <tr>
                <td>Fat</td>
                <td>0</td>
                <td>Gram</td>
               </tr>
               <tr>
                <td>Carbohydrate</td>
                <td>0</td>
                <td>Gram</td>
               </tr>
           </table>
        </main>
    )
}
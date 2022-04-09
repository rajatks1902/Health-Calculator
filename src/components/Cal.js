import React from "react";
import Table from "./Table";

export default function Cal(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
            'X-RapidAPI-Key': '455da2f6acmsha87e08e5453a2c4p1f2d35jsn15ebcb364c78'
        }
    };
    
    const[on,seton]=React.useState([])
    const[getit,setit]=React.useState("")
    const[val,setval]=React.useState({
        food:""
    })
    function handleChange(event) {
        const {name, value} = event.target
        setval(prev=> ({
            ...prev,
            [name]: value
        }))
    }
    const [output,setoutput]=React.useState("")
    const [eng,seteng]=React.useState(0)
    const [fat,setfat]=React.useState(0)
    const [pro,setpro]=React.useState(0)
    const [sug,setsug]=React.useState(0)
    const [carbs,setcarbs]=React.useState(0)
     function calculate(){
        setit(val.food)
        let energy=on.totalNutrients.ENERC_KCAL.quantity;
        let fat1=on.totalNutrients.FAT.quantity;
        let protien1=on.totalNutrients.PROCNT.quantity;
        let sugar1=on.totalNutrients.SUGAR.quantity;
        let carbs1=on.totalNutrients.CHOCDF.quantity;
        seteng(eng+ energy)
        setcarbs(carbs+ carbs1)
        setsug(sug+ sugar1)
        setpro(pro+ protien1)
        setfat(fat+ fat1)
    }
    console.log(getit);
    function printit(){
    let energy=on.totalNutrients.ENERC_KCAL.quantity;
    let fat1=on.totalNutrients.FAT.quantity;
    let protien1=on.totalNutrients.PROCNT.quantity;
    let sugar1=on.totalNutrients.SUGAR.quantity;
    let carbs1=on.totalNutrients.CHOCDF.quantity;
        let dekh=`Energy in Joule :- ${energy} 
               Fat in g :- ${fat1} 
               Protien in g :${protien1}
               Sugar in g :${sugar1}
               Carbohydrate in g :${carbs1}`
        setoutput(dekh) 
    }
    console.log(eng)
    console.log(val.food)
    console.log(on)
    React.useEffect(() => {
    fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple', options)
	.then(response => response.json())
	.then(response => seton(response))
	.catch(err => console.error(err));
}, [getit])


    return(
        <main>
            <div className="value">
            <input
            className="input"
            type="text"
            placeholder="Enter the Food"
            name="food"
            value={val.food}
            onChange={handleChange}
            />
            </div>
            <div className="value">
            <br />
            <table>
            <tr>
            <th><button onClick={printit} className="final">Your micronutients</button></th>
            <th><button onClick={calculate} className="add">ADD</button></th>
            </tr>
            </table>
            </div>
            <br />
            <Table />
            </main>
    )
}
import React from "react";

export default function Cal(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
            'X-RapidAPI-Key': '455da2f6acmsha87e08e5453a2c4p1f2d35jsn15ebcb364c78'
        }
    };
    
    const[on,seton]=React.useState([])
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
    function printit(){
        let ene=on.ENERC_KCAL
        let dekh=`Energy in Joule :- ${on.ENERC_KCAL} 
               Fat in g :- ${on.FAT} 
               Protien in g :${on.PROCNT}`
        setoutput(dekh)
       seteng(eng+ ene )
    }
    console.log(eng)
    console.log(val.food)
    console.log(on)
    React.useEffect(() => {
    fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple', options)
	.then(response => response.json())
	.then(response => seton(response))
	.catch(err => console.error(err));
}, [val.food])


    return(
        <main>
            <input
            type="text"
            placeholder=""
            name="food"
            value={val.food}
            onChange={handleChange}
            />
            <button onClick={printit}>Your micronutients</button>
            <div>{output}</div>
            </main>
    )
}
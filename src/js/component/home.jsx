import React ,{useState}from "react";


//create your first component
	


const Home =() => {
  const listOfColors = ["rgb","green","yellow"];
  const [color,setColor]= useState ("red");

  const handleClick() => { 
	const colorIndex = Math.round(Math.random ()*2);
	setColor (listOfColors[colorIndex])
  }
 return (
		<div className = "trafficbox"> 
			{(() =>{
				switch(color){
				case "red":	
					return <div className ="light red" onClick ={handleClick}>{color}</div>
			
				case "yellow":
					return <div className ="light yellow" onClick ={handleClick}>{color}</div>
				
				case "green":	
				  return<div className="light green" onClick ={handleClick}>{color}</div>
			
				default:
					return <div> no color </div>
					
				}
			})()}
		</div>

 );



};
export default Home;



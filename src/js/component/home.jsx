import React ,{useState}from "react";


//create your first component
	

const Home =() => {
  const listOfColors = [rgb(),"green","yellow"];
  const [color,setColor]= useState ("red");

  const handleClick =() => { 
	const colorIndex = Math.round(Math.random ()*2);
	selectsetColor (listOfColors[colorIndex])
  }
 	return (
	<div className="container text-center">
		<div className  id= "trafficbox"> 
			<div className ="light-red" onClick ={handleClick}>{color}</div>
			<div className ="light-yellow" onClick ={handleClick}>{color}</div>
			<div className="light-green" onClick ={handleClick}>{color}</div>
		</div>
	</div>	

 );



};
export default Home;


//	const [ selectedColor, setSelectedColor ] = useState ("red");
	//let selectedColor = "yellow";

	var handleClick = () =>{
		console.log('alternate colors clicked');
		var listOfColors = ["red", "yellow", "green"];
		var colorIndex = Math.round (Math.random()*2);
		setSelectedColor(listOfColors[colorIndex]);
	} 

	return (
		<div className="container text-center">

			<div className="stick-container">
				<div className="stick"></div>
			</div>

			<div className="traffic-light text-center">

				<div 
				onClick={() => setSelectedColor(("red"))}
				className={"light red" + (selectedColor === "red" ? " glow-r" : "")}></div>
				<div 
				onClick={() => setSelectedColor(("yellow"))}
				className={"light yellow" + (selectedColor === "yellow" ? " glow-y" : "")}></div>
				<div 
				onClick={() => setSelectedColor(("green"))}
				className={"light green" + (selectedColor === "green" ? " glow-g" : "")}></div>

				<div 
				onClick={() => setSelectedColor(("purple"))}
				className={((purple == true) ? "light purple glow-p" : "") }></div>
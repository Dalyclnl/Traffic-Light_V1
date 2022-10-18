import React ,{useState}from "react";



//create your first component
	
const Home =() => {

function ligthOn () {
	const color = ["red","yellow","green"];
	const  [litpos,setLitpos] =useState(null);

	<div className="container">
		   <div id="red-ligth" style={{backgroundColor:litpos ===0 ? "red": "white" }} 
		   oneClick={() => 'setLitPos'(litpos === 0 ? -1 :0)} /> 
		   <div id="yellow-ligth" style={{backgroundColor:litpos === 1 ? "yellow": "white" }} 
		   oneClick={() => "setLitPos"(litpos === 1 ? -1 :1)} />
		   <div id="gree-ligth" style={{backgroundColor:litpos === 2 ? "green": "white" }} 
		   oneClick={() => setLitPos(litpos === 2 ? -1 :2)} />             
   </div>
};
}
export default Home;

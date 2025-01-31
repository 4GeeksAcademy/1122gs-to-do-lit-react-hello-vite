import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Todo from "./todo-list";


//create your first component
const Home = () => {
	return (
		<div className="todo-list text-center">
            <h1 className="todo">TODO LIST</h1>
             <Todo/>	
		</div>
	);
};

export default Home;
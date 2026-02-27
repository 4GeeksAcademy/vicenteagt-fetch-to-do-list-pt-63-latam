import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./ToDoList.jsx";
import { Api } from "./Api.jsx";
//create your first component
const Home = () => {
	return (
		    <div className="container-fluid">
				<div className="row mt-2">
					<div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-2 col-xxl-2
					m-auto justify-content-center">
						<h1 className="todosTittleStyle">todos</h1>
					</div>

				</div>
<ToDoList/>

		 </div>
		
	);
};

export default Home;
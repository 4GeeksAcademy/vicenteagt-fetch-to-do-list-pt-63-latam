import React, { useState, useEffect } from "react";


export const ToDoList = () => {
    let [task, setTask] = useState("");

    function addNewTask(event) {
        setTask(event.target.value)

    }

    let [list, setList] = useState([])


    function addNewArrayElementToList() {
        setList([...list, task])
        setTask("")

    }

    let eliminateListElement = (indexRemove) => {
        let newList = list.filter((item, index) => {
            if (index !== indexRemove) {
                return true;
            } else {
                return false;
            }
        });
        setList(newList);
    };

   let [divDescriptionNoTask, setDivDescriptionNoTask] = useState("")
   
   function condicionalDivDescriptionNoTask () {
if (list.length === 0){
    setDivDescriptionNoTask("")
} else {
    setDivDescriptionNoTask("hiddenDiv")
} return
   }

useEffect(() => {
  condicionalDivDescriptionNoTask();
}, [list]); 

    return (
        <div className="row">
            <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-6 col-xxl-6
            bg-white m-auto mt-2 border border-secondary generalContainer">
                <div className="row">
                    <div className="col-11 col-sm-10 col-md-10 col-lg-12 col-xl-12 col-xxl-12
                    m-auto pb-2">
                        <div className="row">
                            <div className="col-12 m-auto mt-3 ps-5 pe-1">
                                <input type="text" className="form-control border border-0" placeholder="What needs to be done?" value={task} onChange={addNewTask}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            addNewArrayElementToList();
                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    {list.map((item, index) => (
                        <div className="row">


                            <div className="col-12 p-3 border-top border-secondary styleTaskContainer" key={index}>
                                <div className="row">
                                    <div className="col-6">
                                        <span className="ps-5 pe-1 listItemStyle">{item}</span>
                                    </div>
                                    <div className="col-2 ms-auto">
                                        <span><i className="fa-solid fa-x text-danger showAndHiddenButton" onClick={() => eliminateListElement(index)}></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                </>
                <div className={"row "+ divDescriptionNoTask}>
                    <div className="col-12 p-3 border-top border-secondary">
                        <p className="ps-5 pe-1 listItemStyle m-auto ">No hay tareas, añadir tareas</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12  m-auto border-top border-secondary paper p-1">
                        <p className="itemBrandStyle m-auto">{list.length + " item left"}</p>
                    </div>
                </div>

            </div>
        </div >


    )


}





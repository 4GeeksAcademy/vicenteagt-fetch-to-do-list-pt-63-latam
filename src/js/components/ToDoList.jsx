import React, { useState, useEffect } from "react";

export const ToDoList = () => {


    let [getTodos, setGetTodos] = useState([]);
    let [newToDo, setNewToDo] = useState("");


    function addNewTask(event) {
        setNewToDo(event.target.value);
    }

    const API_URL = "https://playground.4geeks.com/todo";


    // lógica fetchs

    const getMyUser = () => {
        fetch(API_URL + "/users/vicente")
            .then((response) => {

                if (response.status === 404) {
                    createUser();
                }

                return response.json();
            })
            .then((data) => {

                setGetTodos(data.todos);
            })
            .catch((error) => console.log("error:", error));
    };


    const createUser = () => {
        fetch(API_URL + "/users/vicente", {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log("error:", error));
    };


    useEffect(() => {
        getMyUser();
    }, []);


    const createToDo = () => {

        fetch(API_URL + "/todos/vicente", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                label: newToDo,
                done: false
            })
        })
            .then(response => response.json())
            .then((data) => {
                getMyUser();

                setNewToDo("");

            })
            .catch((error) => console.log("error:", error));


    };

    const deleteTask = (id) => {

        fetch(API_URL + "/todos/" + id, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => { data })
            .catch((error) => console.log("error:", error));

        getMyUser();


    };

    const deleteAllTasks = () => {


        getTodos.forEach((item) => {

            fetch(API_URL + "/todos/" + item.id, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log("error:", error));

        });
        setGetTodos([])
    };

    return (
        <div className="row">
            <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-6 col-xxl-6
            bg-white m-auto mt-2 border border-secondary generalContainer">

                <div className="row">
                    <div className="col-12 m-auto mt-3 ps-5 pe-1">
                        <input
                            type="text"
                            className="form-control border border-0"
                            placeholder="What needs to be done?"
                            value={newToDo}
                            onChange={addNewTask}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    createToDo();
                                }
                            }}
                        />
                    </div>
                </div>


                {getTodos.map((item) => (
                    <div className="row" key={item.id}>

                        <div className="col-12 p-3 border-top border-secondary styleTaskContainer">
                            <div className="row">
                                <div className="col-10">

                                    <span className="ps-5 pe-1 listItemStyle">
                                        {item.label}
                                    </span>
                                </div>

                                <div className="col-2 ms-auto">

                                    <span >
                                        <i
                                            className="fa-solid fa-x text-danger fs-3 showAndHiddenButton eliminateItem"
                                            onClick={() => deleteTask(item.id)}
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}

                <div className="row paper">
                    <div className="col-6 border-top border-secondary  ps-2 p-1">
                        <p className="itemBrandStyle m-auto">
                            {getTodos.length + " item left"}
                        </p>
                    </div>
                    <div className="col-6 text-end border-top border-secondary  p-1">
                        <button type="button" className="btn btnColor p-1 me-2 itemBrandStyle  m-auto"
                            onClick={() => deleteAllTasks()}>
                            Eliminar todas las tareas
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
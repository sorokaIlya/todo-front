import * as uuid from "uuid";
import Item from "./ListComponent";
import React, {useEffect, useState} from "react";
import {TodoStructure} from "./Repository";
import {observer} from "mobx-react-lite";
import {useStores} from "./App";

export const TodosApp = observer(() => {
    const {TodoEntity} = useStores()
    const [deal, SetDeal] = useState("")
    const addInCollection = (property: TodoStructure) => {
        if (!deal){
            return false
        }
        TodoEntity.setTodo(property);
        SetDeal("");
    }
    useEffect(()=>{
        TodoEntity.loadTodos()
    },[])
    return (
        <div className="main-todos">
        <div>
            <input type="text" className="todo-enter" onChange={e => SetDeal(e.target.value)}/>
            <button className="add_My_Deal" type="button"
                    onClick={() => addInCollection({id: uuid.v4(), task: deal, performance: false})}>Add Todo
            </button>
        </div>
        <ul>
            {TodoEntity.todos.map(todo=><Item key={todo.id} todo={todo}/> )}

        </ul>
    </div>)
})

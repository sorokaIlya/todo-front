import { observable, action, computed } from "mobx"
import HttpTransport from "./provider";

export type TodoStructure={
    id: string,
    task: string,
    performance: boolean,

}
export type UserRegister={
    email:string,
    username:string,
    password:string,
}
export type checkLogin={
    username:string,
    password:string
}
export  type token={
    token:string;
}
export class TodoRepresent {
    private todoTransport : HttpTransport;
    constructor(todos:HttpTransport) {
         this.todoTransport = todos;
    }
    @observable private _todos:Array<TodoStructure>=[{
        task:"Your todos will display here",
        performance:false,
        id:'1'
    }]

     @observable loading:boolean=false;


    @action  loader(value: boolean) {
        this.loading = value;
    }

    @computed get todos():Array<TodoStructure> {
        return this._todos;
    }

    @action   loadTodos (){
      return this.todoTransport.fetchTodos().then(response=>this._todos=response )
    }

    @action public toggleTodo(recent:TodoStructure)
    {
        //const shift=this._todos.find(todo=>todo.id===recent.id)
        this.todoTransport.updateTodo(recent).then(res=>
            this._todos=this._todos.map(function(item){
            if(item.id===res.id){
                item=res
            }
            return item;}
            )
        )
    }
    @action public  setTodo(property:TodoStructure){
       // this.loading=true;
        this.todoTransport.setTodo(property).then(()=>this.loadTodos())
            //.then(()=>this.loading=false);
    }
    @action public deleteTodo(id:string){
        //this._todos.filter(todo=>(todo.id!==id));
        this.todoTransport.deleteTodo(id).then(()=>this.loadTodos());
    }

}


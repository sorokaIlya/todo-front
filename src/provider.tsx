import axios from "axios";
import {checkLogin, TodoStructure, token, UserRegister} from "./Repository";
const config={
    headers:{'Authorization':`bearer ${localStorage.getItem('token')}`,
        'Content-type':'application/json',
    }
}

class HttpTransport {

    fetchTodos = (): Promise<TodoStructure[]> => axios.get('http://127.0.0.1:8000/api/todos',config).then(res=>res.data)

    registerUser = (data: UserRegister): Promise<void> => axios.post('http://127.0.0.1:8000/register', data, {headers: {'Content-type': 'application/json'}});

    checkUser = (data: checkLogin): Promise<token> => axios.post('http://127.0.0.1:8000/api/login_check', data, {headers: {'Content-type': 'application/json'}}).then(response=>response.data);

    setTodo=(data:TodoStructure):Promise<void>=>axios.post('http://127.0.0.1:8000/api/todos',data,config)

    deleteTodo=(data:string):Promise<void>=>axios.delete('http://127.0.0.1:8000/api/todos'+"/"+`${data}`,config)

    updateTodo=(data:TodoStructure):Promise<TodoStructure> =>axios.put('http://127.0.0.1:8000/api/update/'+`${data.id}`,data,config).then(res=>res.data)



}

export default HttpTransport;





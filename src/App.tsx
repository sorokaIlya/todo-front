import React, {useState} from 'react';
import {TodoRepresent} from "./Repository";
import Nav from "./header";
import {BrowserRouter as Router , Route, Switch, Redirect} from "react-router-dom";
import FormRegister from "./FormRegister";
import SignIn from "./FormSign";
import Home from "./Home";
import HttpTransport from "./provider";
import User from "./User";


// const storeContext = React.createContext<TodoRepresent | null>(null)
// export const StoreProvider = ({children}: any) => {
//     const storeTodo = useLocalStore(() => {
//         return new TodoRepresent(new HttpTransport())
//     });
//
//     return <storeContext.Provider value={storeTodo}>{children}</storeContext.Provider>
// }
//
// export const useStore = () => {
//     const store = React.useContext(storeContext)
//     if (!store) {
//         // this is especially useful in TypeScript so you don't need to be checking for null all the time
//         throw new Error('useStore must be used within a StoreProvider.')
//     }
//     return store
// }
const TodoEntity = new TodoRepresent(new HttpTransport());
const UserEntity= new User(new HttpTransport());
export const AppContext = React.createContext({TodoEntity,UserEntity});
export const useStores = () => React.useContext(AppContext);
const App = () => {
    return (
        <Router>
        <AppContext.Provider value={{
            TodoEntity:TodoEntity,
            UserEntity: UserEntity
        }}>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/register" component={FormRegister}/>
                    <Route  path="/sign-in" component={SignIn}/>
                    <Redirect  to='/'/>
                </Switch>
            </div>

        </AppContext.Provider>
        </Router>
    );
}

export default App;

import React from "react";
import {TodosApp} from "./TodosApp";
import Loader from "react-loader-spinner";
import {useStores} from "./App";
import {observer} from "mobx-react-lite";
const Home=observer(()=>{
    const {TodoEntity}  = useStores()
    return(
    <div>
        {TodoEntity.loading ?<div className='loader'><Loader

            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs

        /></div> :<TodosApp></TodosApp>

        }
    </div>
    )
})

export default Home

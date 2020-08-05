import React, {useState} from "react";
import {useHistory} from "react-router";
import {useStores} from "./App";
import {observer} from "mobx-react-lite";

const SignIn=observer(()=>{
    const {UserEntity}  = useStores()
    const history = useHistory();
    const [pass,SetPass]=useState('');
    const [name,SetName]=useState('');

     const fetchToken =(e:React.FormEvent)=>{
        //set token from axios
         e.preventDefault();
         UserEntity.getPrivileges({username:name,password:pass}).then(()=> {
            SetName('');
            SetPass('');

        }
        ).then(()=> {
                 history.push('/')
                window.location.reload();
             }
         )
    }

    return(
        <form onSubmit={fetchToken}>
            <label htmlFor="name" className="refister-label">Your name</label>
            <input type="text" id="name" name="name" onChange={e=>SetName(e.target.value)} className="register-input"/>
            <label htmlFor="pass" className="refister-label">Your password</label>
            <input type="password" id="pass" name="pass" onChange={e=>SetPass(e.target.value)} className="register-input"/>
            <button type="submit">Send</button>
        </form>
    )
})
export default SignIn;

import React, {useState} from "react";
import {useStores} from "./App";
import {useHistory} from "react-router";

const FormRegister=()=>{
    const history = useHistory();
    const {UserEntity} = useStores();
    const [name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [password,Setpassword]=useState('');
    function Send(e:React.FormEvent) {
        //axios to register path
        e.preventDefault()
        if (!name || !email ||!password){
            return false;
        }
        UserEntity.register({username:name,email:email,password:password}).then(()=> {
            Setpassword('');
            SetEmail('');
            SetName('');
            history.push('/sign-in')
        }
        )
    }

    return(
        <form onSubmit={e=>Send} className="form-register">

            <label htmlFor="name" className="refister-label">Enter name</label>
            <input type="text" id="name" name="name" onChange={e=>SetName(e.target.value)} className="register-input"/>
            <label htmlFor="email" className="refister-label">Enter email</label>
            <input type="email" id="email" name="email" onChange={e=>SetEmail(e.target.value)} className="register-input"/>
            <label htmlFor="pass" className="refister-label">Enter password</label>
            <input type="password" id="pass" name="pass" onChange={e=>Setpassword(e.target.value)} className="register-input"/>
            <button type="submit">Send</button>
        </form>
    )

}
export default FormRegister;

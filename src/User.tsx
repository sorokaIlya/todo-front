import HttpTransport from "./provider";
import {checkLogin, UserRegister} from "./Repository";
import {action} from "mobx";


export default class User{
    private thansportHttp:HttpTransport
    constructor(transport:HttpTransport) {
        this.thansportHttp = transport;
    }
   @action register = async (registrObj:UserRegister)=>{
            return this.thansportHttp.registerUser(registrObj);
    }

    @action getPrivileges=async (cheker:checkLogin)=>{
       await this.thansportHttp.checkUser(cheker).then(data=>localStorage.setItem('token',data.token)

        ).then()
    }
    @action clear=async ()=>{
        await localStorage.clear();
        window.location.reload();
    }
}

import axios from 'axios'
import {API_URI} from '../../Constant.js'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService{

    executeBasicAuthenticationService(username,password){
        return axios.get(`${API_URI}/basicauth`,
        { headers:{authorization:this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username,password){
        return axios.post(`${API_URI}/authenticate`,{
            username,
            password
        })        
    }

    createBasicAuthToken(username,password)
    {
        return 'Basic ' + window.btoa(`${username}:${password}`)
    }

    createJwtToken(token)
    {
        return 'Bearer ' + token
    }

    registerSuccessfullLogin(username,password){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
        this.setUpAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerJwtSuccessfullLogin(username,token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username)
        this.setUpAxiosInterceptors(this.createJwtToken(token))
    }
    
    logout()
    {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) {           
            return false
        }
        else
        {
            return true
        }
        
    }
    
    getLoggedinUserName()
    {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) {           
            return ''
        }
        else
        {
            return user
        }
    }

    setUpAxiosInterceptors(token)
    {
 
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                config.headers.authorization = token
                }
               
                return config
            }
        )
    }
}

export default new AuthenticationService()
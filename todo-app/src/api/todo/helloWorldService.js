import axios from 'axios'

class HelloWorldService
{
    executeHelloWorldService()
    {
        return axios.get('http://localhost:8080/hello');
    }

    executeHelloWorldBeanService()
    {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathService(name)
    {
        // let username = 'ace'
        // let password = 'password'

        // let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`)
        

        return axios.get(`http://localhost:8080/hello-world/pathvariable/${name}`
        // {
        //     headers : { authorization: basicAuthHeader }
        // }
        );
    }

}

export default new HelloWorldService()
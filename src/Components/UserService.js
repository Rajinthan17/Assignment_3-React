import axios from 'axios';

const USER_URL = 'http://localhost:8081/user';

class UserService {

    createUser(user){
        return axios.post(USER_URL,user,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetAllUsers(pageNo){
        return axios.get(USER_URL + "?pageNo="+ pageNo + "&pageSize=5",{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    DeleteUser(id){
        return axios.delete(USER_URL + "/" + id,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}} )
    }

    SearchUser(search, pageNO){
        return axios.get(USER_URL + "/Searchedpage?searched="+ search + "&pageNo="+ pageNO + "&pageSize=5",{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}} )
    }

    UpdateUser(id,user){
        return axios.put(USER_URL+ "/" + id,user,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }

    GetById(id){
        return axios.get(USER_URL + "/" + id,{headers : {"Authorization" : "Basic " + localStorage.getItem('token')}})
    }
}

export default new UserService();
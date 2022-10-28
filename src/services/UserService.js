import axios from "axios";
export class UserService{
    static users = []

      static GetAllUsers() {
        let dataURL = 'https://jsonplaceholder.typicode.com/users'
        return axios.get(dataURL)
      }
}
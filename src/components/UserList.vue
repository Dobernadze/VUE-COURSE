<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class = "h3 fw-bold text-success"> User List </p>
                <p class = "fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ea aliquid cupiditate quisquam consequatur et alias ullam, assumenda at, numquam totam, vitae dolor recusandae qui maiores dolore reprehenderit quos eaque?</p>
            </div>
            <div class = "row">
                <div class="col">
                    <table class = "table table-hover text-center table-striped">
                        <thead class = "bg-success text-white">
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Website</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.company.name}}</td>
                                <td>{{user.website}}</td>
                                <td>{{user.address.city}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import {UserService} from "@/services/UserService"
export default{
    name:"UserList",
    data: function(){
        return{
            loading:false,
            users:[],
            errorMessage: null
        }
    },
    created:async function(){
        try{
            this.loading = true;
            let response = await UserService.GetAllUsers()
            this.loading = false
            this.users = response.data

        }catch(error){
            this.loading = false
            this.errorMessage = error

        }
    }
}
</script>

<style scoped>
</style>
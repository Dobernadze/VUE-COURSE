<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p class="h3 fw-bold text-success">Welcome User</p> 
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sequi dignissimos laudantium aliquid 
                                fugit dolorem officiis voluptate, quisquam ab velit rerum 
                                laborum reprehenderit cum at 
                                provident autem totam obcaecati iusto soluta.
                            </p>   
                        </div>
                        <div v-if="!isLoggedIn">
                            <p class="h3 fw-bold text-danger">Thank you</p> 
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sequi dignissimos laudantium aliquid 
                                fugit dolorem officiis voluptate, quisquam ab velit rerum 
                                laborum reprehenderit cum at 
                                provident autem totam obcaecati iusto soluta.
                            </p>   
                        </div>
                        <div>
                            <button v-if="!isLoggedIn" class="btn btn-success m-1" @click="login()">Login</button>
                            <button v-if="isLoggedIn" class="btn btn-danger m-1" @click="logout()">LogOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"AuthUser",
    data: function(){
        return{
            isLoggedIn:false
        }
    },
    methods:{
        login:function(){
            this.isLoggedIn = true
        },
        logout:function(){
            this.isLoggedIn = false
        }
    }
}

</script>

<style scoped>
</style>
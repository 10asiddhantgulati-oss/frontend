<template>
  <div class="login-container">

    <div class="login-box">

      <h1>Login</h1>

      <input
        type="email"
        v-model="email"
        placeholder="Enter Email"
      />

      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
      />

      <button @click="login">
        Login
      </button>

    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const email = ref('')
const password = ref('')

const router = useRouter()

async function login() {

    try {

        const response = await api.post('/login', {

            email: email.value,
            password: password.value

        })

        if (response.data === "Login Successful") {

            alert("Login Successful")

            router.push('/dashboard')

        }
        else {

            alert("Invalid Email or Password")

        }

    }
    catch (error) {

        console.error(error)

        alert("Cannot connect to backend.")

    }

}

</script>

<style scoped>

.login-container{

    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f5f5f5;

}

.login-box{

    width:350px;
    background:white;
    padding:40px;
    border-radius:10px;
    box-shadow:0 0 12px rgba(0,0,0,0.2);

}

h1{

    text-align:center;
    margin-bottom:25px;

}

input{

    width:100%;
    padding:12px;
    margin-bottom:15px;
    font-size:16px;
    box-sizing:border-box;

}

button{

    width:100%;
    padding:12px;
    background:#007BFF;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
    font-size:16px;

}

button:hover{

    background:#0056b3;

}

</style>
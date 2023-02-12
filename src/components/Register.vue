<template>
  <main class="form-signin w-25 m-auto">
  <form>
    <img :src="logo" alt="logo"  style=" cursor: pointer;" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal">Register</h1>

    <Input :label="'Name'" :type="'text'"/>
    <Input :label="'Email address'" :type="'email'"/>    
    <Input :label="'Password'" :type="'password'"/>

    <Button type="submit">Register</Button>
  </form>
</main>
</template>

<script>
import {logo} from '../constants'
export default {
  data(){
    return{
      logo,
    }
  }
}
</script>

<style>
  
</style>
<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center text-dark text-decoration-none">
        <img :src="logo" alt="logo"  style="width: 100px; height: 70px; cursor: pointer;" @click="toHomeHandler">
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <template v-if="isLoggedIn"> 
          <Router-link :to="{name: 'home'}" class="me-3 py-2 text-dark text-decoration-none">{{ currentUser.username }}</Router-link>
        </template>
        <template v-if="isAnonymous">
          <Router-link :to="{name: 'login'}" class="me-3 py-2 text-dark text-decoration-none">Login</Router-link>
          
          <Router-link :to="{name: 'register'}" class="me-3 py-2 text-dark text-decoration-none">Register</Router-link>
        </template>
      </nav>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import {logo} from '../constants'
import {gettersTypes} from '@/modules/types'
export default {
  data(){
    return{
      logo,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggedIn,
      isAnonymous: gettersTypes.isAnonymous,
    }),
  },
  methods: {
    toHomeHandler(){
      return this.$router.push({name: "home"})
    }
  }
}
</script>


<style></style>
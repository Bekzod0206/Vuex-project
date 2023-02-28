<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
  </div>
  <Loader v-else class="offset-md-6"/>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
    })
  },  
}
</script>

<style></style>
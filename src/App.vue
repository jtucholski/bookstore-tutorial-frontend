<template>
  <div id="app">
    <div class='container'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin();
  },
  updated () {
    this.checkCurrentLogin();
  },

  methods: {
    checkCurrentLogin() {
      if (!localStorage.token && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

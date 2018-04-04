<template>
  <div class='login-wrapper'>
    <form class='form-signin' @submit.prevent='login'>
      <h3 class='form-signin-heading'>Please Sign In</h3>

			<label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control"
             placeholder="Email address" required autofocus>

      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword"
             class="form-control" placeholder="Password" required>

      <button class="btn btn-green btn-block" type="submit">
				Sign in
			</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.email)
      console.log(this.password)
    }
  }
}
</script>

<style lang='css'>
.btn-green {
	background: #23CE6B;
  color: #fff;
}
.btn-green:hover {
	background: #1daf5a;
}

body {
  background: #272D2D;
}
.login-wrapper {
  background: #EDF5FC;
  width: 50%;
  margin: 12% auto;
  border-radius: 2.5px;
}
.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 7.5px;
  font-size: 12px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

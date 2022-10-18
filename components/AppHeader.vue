<template>
  <header>
    <div id="logo">
      <img src="../assets/img/logo.png" alt="logo" />
      <h1>
        <router-link to="/">CMDB</router-link>
      </h1>
    </div>
    <nav>
      <nuxt-link @click="$emit('showSignIn')" id="login-text"
        >Sign in</nuxt-link
      >
      <nuxt-link @click="$emit('showSignIn')" id="small-screen-login"
        ><span class="material-icons"> login </span>
      </nuxt-link>
      <nuxt-link @click="$emit('showSignUp')" id="register-text"
        >Sign up</nuxt-link
      >
      <nuxt-link @click="$emit('showSignUp')" id="small-screen-register"
        ><span class="material-icons-outlined"> person_add </span></nuxt-link
      >
    </nav>
  </header>
</template>

<style scoped>
* {
  color: white;
}
#small-screen-register,
#small-screen-login {
  display: none;
}
header {
  height: 84px;
  background-color: #9461ff;
  display: flex;
  justify-content: space-between;
  margin: -8px;
  padding: 0 64px;
}
#logo,
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
#logo {
  gap: 0.5em;
}
nav {
  gap: 1.5em;
}
nav a {
  text-decoration: none;
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
}
h1 a {
  text-decoration: none;
}
nav a:hover,
nav a:focus {
  text-decoration: overline;
  text-decoration-style: 2px solid white;
}
h1 {
  font-family: "Popins", sans-serif;
  font-weight: 500;
  font-size: 20px;
}
nav {
  font-family: "Montserrat", sans-serif;
}
img {
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
}
nav a.router-link-exact-active {
  text-decoration: overline;
  text-decoration-color: white;
}
#small-screen-login {
  color: white;
  fill: white;
}
@media (max-width: 850px) {
  header {
    height: 60px;
  }
  img {
    height: 50px;
    width: 50px;
    align-self: center;
  }
  nav a,
  h1 {
    font-size: 16px;
  }
  #small-screen-register,
  #small-screen-login {
    display: inline;
  }
  #login-text,
  #register-text {
    display: none;
  }
}
@media (max-width: 450px) {
  nav a,
  h1 {
    font-size: 14px;
  }
}
</style>

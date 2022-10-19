<script setup>
const signUp = ref(true);
const signIn = ref(false);
const showSignUp = () => {
  signUp.value = true;
  signIn.value = false;
};

const showSignIn = () => {
  signUp.value = false;
  signIn.value = true;
};
</script>
<template>
  <div class="body">
    <img src="@/assets/img/home_background.png" alt="" />
    <AppHeader @showSignUp="showSignUp" @showSignIn="showSignIn" />
    <h1>Welcome to CMDB !</h1>
    <div class="content">
      <div class="presentation">
        <h2>What is CMDB ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae enim sollicitudin, porta tellus non, tempor nibh. Praesent
          ligula odio, fringilla ultricies erat sit amet, sagittis aliquam
          tortor. Quisque vestibulum est nisl, in laoreet ex sodales vel.
          Integer a consectetur tellus. Vestibulum ut massa ligula
        </p>
        <div class="buttons">
          <ButtonsPrimaryButton :text="'Sign in'" @click="showSignIn" />
          <ButtonsSecondaryButton :text="'Sign up'" @click="showSignUp" />
        </div>
      </div>
      <transition>
        <FormsSignIn v-if="signIn === true" />
      </transition>
      <transition>
        <FormsSignUp v-if="signUp === true" />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
}
img {
  position: absolute;
  top: 0;
  width: 99.5vw;
  height: 35vh;
  object-fit: fill;
  z-index: -1;
}

h1 {
  text-align: center;
  font-size: 3em;
  width: 30%;
  font-family: "Poppins", sans-serif;
  background-color: white;
  margin: 2em auto;
}

.presentation {
  width: 30vw;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 36px;
}

p {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2em;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

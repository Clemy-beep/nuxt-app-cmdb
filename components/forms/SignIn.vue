<template>
  <div class="form">
    <h2><span class="material-symbols-outlined"> login </span> Sign in</h2>
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      v-model="email"
      placeholder="Ex: example@example.com"
      required
    />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Your password goes here"
      required
    />
    <div class="button">
      <PrimaryButton :text="'Sign in'" @click="signIn" />
    </div>
  </div>
</template>

<script setup>
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
const email = ref("");
const password = ref("");
const signIn = () => {
  console.log(email.value, password.value);
};
</script>

<style scoped>
.material-symbols-outlined {
  font-size: 30px;
  color: #9461ff;
  vertical-align: middle;
}
h2 {
  font-family: "Popins", sans-serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 0.5em;
}
label {
  display: block;
  text-align: left;
  padding-left: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-top: 1em;
}

input {
  height: 42px;
  width: 90%;
  min-width: calc(100% - 128px);
  border: 2px solid #9461ff;
  background-color: transparent;
  border-radius: 19px;
  font-size: 16px;
  padding-left: 16px;
  font-family: "Montserrat", sans-serif;
  padding-right: 16px;
}

.form {
  width: 20%;
  min-width: 300px;
  padding: 0 26px;
  box-shadow: 0px 0px 8px 2px #00000025;
  border-radius: 16px;
  background-color: white;
}

.button {
  display: flex;
  justify-content: center;
  padding-bottom: 2em;
}

input::placeholder {
  color: #222224;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 300;
}
</style>

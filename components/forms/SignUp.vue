<template>
  <div class="form">
    <h2><span class="material-symbols-outlined"> add_circle </span> Sign up</h2>
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      v-model="email"
      required
      placeholder="Ex: example@example.com"
      :class="{ invalid: hasError }"
      @change="hasError = false"
    />
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      v-model="username"
      required
      placeholder="Skywalker"
    />
    <label for="date-of-birth">Date of Birth</label>
    <input
      type="date"
      name="date-of-birth"
      id="date-of-birth"
      required
      v-model="dateOfBirth"
    />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      required
      placeholder="Your password goes here"
    />
    <label for="user-type">User type</label>
    <select name="user-type" id="user-type" v-model="role">
      <option value="USER">User</option>
      <option value="MODERATOR">Moderator</option>
    </select>
    <div class="button">
      <ButtonsPrimaryButton :text="'Sign up'" @click="signUp" />
    </div>
    <ConfirmDialog
      @handleSubmit="handleSubmit"
      @closeModal="showDialog = false"
      :title="title"
      :message="message"
      :showModal="showDialog"
    />
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const username = ref("");
const dateOfBirth = ref(new Date(""));
const role = ref("USER");
const title = ref("Moderator account creation");
const hasError = ref(false);
const message = ref(
  "You are about to create a moderator account. It means you want to decide wether posts you see should be visible or not to other users. Such a role isn’t to be taken lightly and, if you abuse your power, you might be definitively banned from this website. If not already done, please read our Moderation rules. By clicking on “Confirm, you accept ToU and confirm having read our Moderation rules."
);
const showDialog = ref(false);

const signUp = () => {
  console.log("sign up fun lauched");
  if (role.value === "MODERATOR") {
    showDialog.value = true;
    return;
  }
  handleSubmit();
};

const handleSubmit = () => {
  showDialog.value = false;
  hasError.value = true;
  console.log("Account created");
};
</script>

<style scoped>
.invalid {
  border: 1px solid red;
}
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

input,
select {
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

select {
  width: 100%;
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

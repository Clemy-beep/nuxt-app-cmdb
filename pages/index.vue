<template>
  <div>
    <img src="@/assets/img/home_background.png" alt="" />
    <AppHeader />
    <h1>Welcome to CMDB !</h1>
  </div>
</template>

<style scoped>
img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 45vh;
  object-fit: cover;
  z-index: -1;
}

h1 {
  position: absolute;
  top: 16.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  font-family: "Poppins", sans-serif;
}
</style>

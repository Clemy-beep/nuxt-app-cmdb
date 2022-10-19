<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    default: "Confirm",
  },
  cancelText: {
    type: String,
    default: "Cancel",
  },
  showModal: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["handleSubmit", "closeModal"]);
</script>

<template>
  <transition name="fade">
    <div class="modal-mask" v-if="showModal" />
  </transition>
  <transition name="pop">
    <div class="modal-container" v-if="showModal">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="btns">
        <ButtonsPrimaryButton
          :text="confirmText"
          @click="$emit('handleSubmit')"
        />
        <ButtonsSecondaryButton
          :text="cancelText"
          @click="$emit('closeModal')"
        />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 35em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}

h2 {
  font-family: "Popins", sans-serif;
  color: #9461ff;
  font-size: 30px;
  text-align: center;
  padding: 0.5em;
}
p {
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  padding: 0.5em;
  text-align: justify;
}
.btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>

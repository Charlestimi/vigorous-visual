<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="counter-area">
    <button @click="increment" class="counter-btn">
      Count is: {{ count }}
    </button>
  </div>
</template>

<style>
.counter-btn {
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;

  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
}

.counter-area {
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 0.5rem;
  padding: 10px;

  transition: all 0.2s ease;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow */
}

</style>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">Login</h1>
      <form
        class="flex items-start justify-center gap-4 flex-col"
        @submit.prevent="handleLogin"
      >
        <input
          class="border border-green-400 border-1 p-2"
          placeholder="username"
          type="text"
          v-model="username"
          id="username"
          required
        />
        <input
          class="border border-green-400 border-1 p-2"
          placeholder="password"
          id="password"
          v-model="password"
          type="password"
          required
        />
        <button
          type="submit"
          class="border px-4 rounded-xl border-green-300 py-2"
          :disabled="isLoading"
        >
          submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");
const isLoading = ref<boolean>(false);

const handleLogin = async () => {
  // e.preventDefault();
  console.log(username.value, password.value);
};
</script>

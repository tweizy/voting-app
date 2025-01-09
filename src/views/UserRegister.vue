<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800 tracking-tight">Create Account</h1>
          <p class="mt-2 text-gray-600">Join EventVote today</p>
        </div>
        
        <form @submit.prevent="register" class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              v-model="password"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Choose a password"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            Create Account
          </button>
        </form>

        <p class="text-center text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-blue-500 hover:text-blue-600 font-medium">
            Sign in
          </router-link>
        </p>

        <div v-if="error" class="p-4 bg-red-50 rounded-xl text-red-500 text-center text-sm">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "UserRegister",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async register() {
      this.error = "";
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/dashboard");
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>
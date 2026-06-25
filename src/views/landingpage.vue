<template>
  <div class="min-h-screen bg-slate-950 text-white">

    <nav class="flex justify-between items-center px-10 py-6">

      <div class="flex items-center gap-3">
        <img
          src="../assets/hero.png"
          class="h-12"
          alt="Ericsson"
        />
        <h2 class="text-2xl font-bold">
          Ericsson Store
        </h2>
      </div>

      <div class="flex gap-4">
        <router-link to="/login">
          <button
            class="px-5 py-2 border border-slate-600 rounded-lg"
          >
            Login
          </button>
        </router-link>

        <router-link to="/signup">
          <button
            class="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </router-link>
      </div>

    </nav>

    <div
      class="flex flex-col items-center justify-center text-center mt-24"
    >

      <h1 class="text-6xl font-bold mb-6">
        Ericsson Store
      </h1>

      <p class="text-2xl text-slate-300 mb-4">
        Network Solutions Marketplace
      </p>

      <p class="text-slate-400 max-w-xl mb-8">
        Manage enterprise networking products,
        analytics and procurement through a
        single platform.
      </p>

      <div class="flex gap-4">
        <router-link to="/login">
          <button
            class="bg-blue-600 px-8 py-3 rounded-lg"
          >
            Login
          </button>
        </router-link>

        <router-link to="/signup">
          <button
            class="border border-slate-600 px-8 py-3 rounded-lg"
          >
            Sign Up
          </button>
        </router-link>
      </div>

    </div>

  </div>
</template>
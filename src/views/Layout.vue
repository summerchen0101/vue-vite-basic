<script setup>
</script>

<template>
  <div class="h-full">
    <div class="w-64 fixed left-0 h-full bg-blue-500">

      <ul class="text-white text-center space-y-4  mt-10">
        <li>
          <router-link to="/home">首頁</router-link>
        </li>
        <li>
          <router-link to="/other">其他</router-link>
        </li>
      </ul>
    </div>
    <div class="ml-64 bg-gray-100 h-full">
      <router-view />
    </div>
  </div>
</template>

<style>
</style>

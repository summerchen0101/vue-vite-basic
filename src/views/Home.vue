<script setup>
</script>

<template>
  <div class="h-full p-4">
    <table class="w-full mt-5">
     <thead>
       <tr>
         <th>名稱</th>
         <th>內容</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="t in 10" :key="t">
         <td>XXX</td>
         <td>XXX</td>
       </tr>
     </tbody>
   </table>
  </div>
</template>

<style>
</style>

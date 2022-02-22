<script setup>
</script>

<template>
  <div class="row g-3 align-items-center mt-2 mb-4">
    <div class="col-auto">
      <input type="text" class="form-control" placeholder="請輸入關鍵字">
    </div>
    <div class="col-auto">
      <button class="btn btn-primary">搜尋</button>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-md">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 15" :key="n">
          <td>1,001</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>text</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>

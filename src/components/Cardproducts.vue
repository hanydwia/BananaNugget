<template>
<div class="row">
  <div
   class="col-lg-4 mt-3" 
  v-for="(product, index) in products" 
  :key="index"
  >
  <div class="card">
  <div class="card-header">{{ product.nama }}</div>
  <div class="card-body">
    <h5 class="card-title">{{ product.harga }}</h5>
     
    
  </div>
  <div class="card-footer text-muted">
      <router-link 
      class="btn btn-primary" 
            :to="{ name: 'Detailproducts', params: { id: product.id } } "
              >Detail</router-link
            >
            </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
props: ["products"],
};
</script>

<style>
</style>
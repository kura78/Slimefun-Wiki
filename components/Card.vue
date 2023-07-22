<script>
export default {
    props: {
        img: String,
        title: String,
    }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
        <slot></slot>
    </div>
  </div>
  </template>
 
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  align: center;
}


</style>
<template>
  <div class="container-fluid vh-100 vw-100 m-0 p-0">
    <h1 class="vr text-center white-text">Evans</h1>
    <a-row :gutter="16" class="h-100 w-100">
      <a-col :span="12" class="h-100 p-0">
        <img class="h-100 w-100" src="/images/black_white.jpg" />
      </a-col>
      <a-col :span="12" class="bg-black"></a-col>
    </a-row>
  </div>
</template>

<script>
</script>

<style scoped>
h1.vr {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  top: 85%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 29vw;
  text-transform: uppercase;
  z-index: 1;
  color: white;
  font-weight: 800;
  /* color: transparent; */
  line-height: .1vh;
  /* -webkit-text-fill-color: transparent; */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}
.white-text {
  color: white;
}
</style>
<template>
  <Header />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 d-none d-lg-flex">
        <Menu />
      </div>
      <div class="col-sm-10 p-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/admin/Header.vue'
import Menu from '~/components/admin/Menu.vue'

export default {
  components: {
    Header,
    Menu
  }
}
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
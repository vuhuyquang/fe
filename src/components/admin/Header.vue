<template>
  <div class="container-fluid">
    <div class="row bg-pink p-4">
      <div class="col-12 align-items-center justify-content-center justify-content-sm-start">
        <a href="#" class="logo mt-1">
          <img src="/images/icons/logo-01.png" alt="IMG-LOGO" class="ms-3 me-3">
        </a>
      </div>
    </div>
  </div>

  <a-drawer :visible="drawerMenu" @close="hideDrawerMenu" :root-style="{ color: 'blue' }" style="color: red"
    title="Danh mục" placement="left">
    <Menu />
  </a-drawer>

  <a-drawer :visible="drawerProfile" @close="hideDrawerProfile" :root-style="{ color: 'blue' }" style="color: red"
    title="Admin" placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import Menu from '~/components/admin/Menu.vue'

export default {
  name: 'Header',
  data() {
    return {
      drawerMenu: false,
      drawerProfile: false
    }
  },
  components: {
    Menu
  },
  methods: {
    showDrawerMenu() {
      this.drawerMenu = true
    },
    hideDrawerMenu() {
      this.drawerMenu = false
    },
    showDrawerProfile() {
      this.drawerProfile = true
    },
    hideDrawerProfile() {
      this.drawerProfile = false
    }
  }
}
</script>

<style scoped>
.bg-pink {
  background-color: #da1f63;
}
</style>
<template>
  <a-row class="shadow fixed-top py-3 px-3 bg-f9f9f9 m-0 gap-2 cursor-pointer">
    <a-col flex="none" class="d-flex justify-content-start">
      <img class="custom-avatar cursor-pointer" height="44"
        src="https://mir-s3-cdn-cf.behance.net/user/50/1148755320017.617fd8ae2afe4.jpg" />
    </a-col>
    <a-col flex="none" class="d-flex flex-column align-items-start align-self-center gap-1">
      <div>
        <span class="fw-bold font fs-6 cursor-pointer">Quang Vu Huy</span>
      </div>
      <div class="d-flex gap-2">
        <a-popover class="d-flex gap-1" placement="bottomLeft" title="Thông tin cá nhân">
          <template #content>
            <div class="d-flex gap-1">
              <ShoppingFilled class="mt-1" />
              <p>Làm việc tại <span class="fw-both">Giaohangtietkiem.vn</span></p>
            </div>
            <div class="d-flex gap-1">
              <HomeFilled class="mt-1" />
              <p>Sống tại <span class="fw-both">Hà Nội</span></p>
            </div>
            <div class="d-flex gap-1">
              <EnvironmentFilled class="mt-1" />
              <p>Đến từ <span class="fw-both">Thái Bình</span></p>
            </div>
            <div class="d-flex gap-1">
              <HeartFilled class="mt-1" />
              <p>Độc thân</p>
            </div>
          </template>
          <span class="font text-secondary fs-6 cursor-pointer">Lập trình viên</span>
          <span>
            <CaretDownOutlined :style="{ fontSize: '10px' }" />
          </span>
        </a-popover>
        <span v-if="isFollow" @click="toggleFollow" class="text-muted mt-c cursor-pointer">Hủy theo dõi</span>
        <span v-if="!isFollow" @click="toggleFollow" class="text-muted mt-c cursor-pointer">Theo dõi</span>
      </div>
    </a-col>
    <a-col flex="auto" class="d-flex justify-content-end align-items-center">
      <div
        class="d-none d-sm-none d-md-none d-lg-block d-flex align-items-center font text-secondary fs-6 cursor-pointer">
        <a class="text-navbar mx-3" href="/home">TRANG CHỦ</a>
        <a class="text-navbar mx-3" href="/blog">BÀI VIẾT</a>
        <a class="text-navbar mx-3" href="/contact">LIÊN HỆ</a>
      </div>
      <div class="d-lg-none d-flex align-items-center">
        <MenuOutlined class="fs-6" />
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { ShoppingFilled, HomeFilled, EnvironmentFilled, HeartFilled, CaretDownOutlined, MenuOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    ShoppingFilled,
    HomeFilled,
    EnvironmentFilled,
    HeartFilled,
    CaretDownOutlined,
    MenuOutlined
  },
  data() {
    return {
      isFollow: false,
    }
  },
  methods: {
    toggleFollow() {
      this.isFollow = !this.isFollow
    }
  }
}
</script>

<style scoped>
.bg-f9f9f9 {
  background-color: white;
}
.custom-avatar {
  border: 2px solid #e84118;
  padding: 1px;
  border-radius:50%;
}
.font {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.mt-c {
  margin-top: 1px;
}
.text-navbar {
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  opacity: 1;
  color: black;
}
.text-navbar:hover {
  color: #fdcb6e;
}
.cursor-pointer {
  cursor: pointer;
}
.fw-both {
  font-weight: 600;
}
</style>
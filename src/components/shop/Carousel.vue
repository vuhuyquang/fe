<template>
  <a-carousel class="h-100 w-100" arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <LeftCircleOutlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <RightCircleOutlined />
      </div>
    </template>
    <div v-for="(img, index) in imageList" :key="index">
      <img :src="img.src" :alt="img.alt">
    </div>
  </a-carousel>
</template>
  
<script>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    LeftCircleOutlined,
    RightCircleOutlined
  },
  props: {
    imageList: Array
  }
}
</script>

<style scoped>
svg {
  color: #fff;
}
:deep(.slick-slide) {
  text-align: center;
  height: 78vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}
:deep(.slick-slide h3) {
  color: #fff;
}
</style>
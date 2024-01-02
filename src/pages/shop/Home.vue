<template>
  <Header />
  <Banner />
  <section class="ftco-section ftco-intro">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-md-8">
          <h2><span>Lập trình viên</span> website, blogger, và là CEO &amp; Founder của <span>Evans</span></h2>
          <p>Rất nhiều người biết tới Vũ Huy Quang lần đầu tiên như là một Frontend Developer hoặc thậm chí là Automation Tester… nhưng thật ra anh là một <b>Backend Developer</b>.<br>Trớ trêu thay, suốt gần 2 năm làm việc và tạo ra hàng chục phần mềm. Hầu hết mọi người đều xem anh như một <b>“Kỹ sư phối màu HTML”</b>. Có lẽ vì anh dành nhiều thời gian để làm việc với chúng. Quan trọng nhất, anh luôn phải flexible để va vấp và trải nghiệm, để nỗ lực và học hỏi những công nghệ mới khi cần thiết, cả những hoài bão và ấp ủ của chính mình!</p>
        </div>
      </div>
    </div>
  </section>
  <section class="services-section py-5 py-md-0">
    <div class="container">
      <div class="row no-gutters d-flex">
        <div
          class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated hover-yellow custom-hover-effect">
          <div class="media block-6 services d-block">
            <div class="icon mb-3">
              <img height="80" width="80" src="/svg/web_design.svg" />
            </div>
            <div class="media-body">
              <h3 class="heading mb-3">Thiết kế Web</h3>
              <p>Thiết kế giao diện và trải nghiệm người dùng trên các trang web.</p>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated bg-dark-custom text-white hover-yellow">
          <div class="media block-6 services active d-block">
            <div class="icon mb-3">
              <img height="80" width="80" src="/svg/web-development.svg" />
            </div>
            <div class="media-body">
              <h3 class="heading mb-3">Phát triển Web</h3>
              <p>Xây dựng và phát triển các trang web.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated hover-yellow">
          <div class="media block-6 services d-block">
            <div class="icon mb-3">
              <img height="80" width="80" src="/svg/graphic_design.svg" />
            </div>
            <div class="media-body">
              <h3 class="heading mb-3">Thiết kế đồ họa</h3>
              <p>Tạo ra các hình ảnh, biểu đồ và thiết kế đồ họa sáng tạo để truyền tải thông điệp.</p>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated bg-fdcb6e hover-yellow">
          <div class="media block-6 services active-2 d-block">
            <div class="icon mb-3">
              <img height="80" width="80" src="/svg/writing.svg" />
            </div>
            <div class="media-body">
              <h3 class="heading mb-3">Viết Blog</h3>
              <p>Thể hiện bản thân, chia sẻ kiến thức, và tạo kết nối với độc giả thông qua các bài viết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ftco-section ftco-portfolio h2">
    <div class="container-fluid">
      <div class="row justify-content-center pb-3">
        <div class="col-md-12 mb-5 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <h2 class="mb-5">FAST FLEXIBLE <span>FRIENDLY</span></h2>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in featuredArticleList" :key="index" class="container mb-custom">
      <div class="row no-gutters">
        <div class="col-md-12 portfolio-wrap">
          <div class="row no-gutters align-items-center">
            <div v-bind:class="{ 'order-md-last': index % 2 === 1 }" class="col-md-5 img js-fullheight">
              <img class="w-100" height="654" src="https://preview.colorlib.com/theme/evans/images/work-1.jpg.webp"
                alt="">
            </div>
            <div class="col-md-7">
              <div class="text pt-5 pl-0 pl-lg-5 pl-md-4 ftco-animate fadeInUp ftco-animated">
                <div class="px-4 px-lg-4">
                  <div class="desc">
                    <div class="top">
                      <span class="subheading">{{ item.category_name }} <span class="time-custom">[{{ formatDatetimeToDate(item.created_at) }}]</span> </span>
                      <h2 class="mb-4"><a href="work.html">{{ item.title }}</a></h2>
                    </div>
                    <div class="absolute">
                      <p>{{ item.summary }}</p>
                      <p><a href="#" class="custom-btn">Xem thêm</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Carousel from '~/components/shop/Carousel.vue'
import Header from '~/components/shop/Header.vue'
import Footer from '~/components/shop/Footer.vue'
import Banner from '~/components/shop/Banner.vue'
import { formatDatetimeToDate } from '~/helpers/dateHelper.js'
import postService from '~/service/postService'

export default {
  components: {
    Carousel,
    Header,
    Footer,
    Banner
  },
  data() {
    return {
      images: [
        { src: '/images/jk.jpg', alt: 'Image 1' },
        { src: '/images/stary-night321.jpg', alt: 'Image 2' },
        { src: '/images/stary-night123.jpg', alt: 'Image 3' },
      ],
      featuredArticleList: []
    }
  },
  created() {
    this.getFeaturedArticle()
  },
  methods: {
    formatDatetimeToDate,
    getFeaturedArticle() {
      const params = {
        perPage: 4,
        page: 1
      }
      postService.getFeaturedArticle(params).then(response => {
        if (response?.data.success) {
          this.featuredArticleList = response.data.data.data
          console.log(123, this.featuredArticleList)
        }
      })
    }
  }
}
</script>

<style scoped>
.time-custom {
  font-weight: 400;
}

.mb-custom {
  margin-bottom: 100px;
}

.portfolio-wrap .text .absolute p {
  color: #4d4d4d;
}

.subheading a {
  text-decoration: none;
}

.portfolio-wrap .text h2 a {
  transition: .3s all ease;
  text-transform: uppercase;
  font-size: 30px;
  font-family: "Lora", serif;
  color: #000000;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
}

.portfolio-wrap .text h2 {
  font-size: 44px;
  display: inline-block;
}

@media (max-width: 575.98px) {

  .portfolio-wrap .text h2 a,
  .portfolio-wrap .text h2 {
    font-size: 22px;
  }
}

.portfolio-wrap .text .subheading {
  display: block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0px;
  color: #000000;
  font-weight: 700;
  line-height: 1.8;
}

.portfolio-wrap .text .desc {
  position: relative;
  width: 100%;
}

@media (min-width: 1200px) {
  .portfolio-wrap .text .desc .top {
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .portfolio-wrap .text .desc .top.top-relative {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  .portfolio-wrap .text .desc .absolute {
    opacity: 0;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transform: translateY(-20%);
    -ms-transform: translateY(-20%);
    transform: translateY(-20%);
  }

  .portfolio-wrap .text .desc .absolute.relative {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.portfolio-wrap .text .desc .custom-btn {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
  color: #b3b3b3;
  font-weight: 700;
}

.portfolio-wrap .text:hover {
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.portfolio-wrap .text:hover .absolute {
  position: relative;
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.portfolio-wrap .text:hover .top {
  position: relative;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.heading-section h2 {
  font-size: 14vw;
  font-weight: 900;
  line-height: 1.0;
  font-family: "Poppins", Arial, sans-serif;
  text-transform: uppercase;
  text-align: left;
}

.heading-section h2 span {
  font-family: "Lora", serif;
  font-weight: 400;
  display: block;
  text-align: right;
}

.ftco-section {
  padding: 7em 0;
  position: relative;
}

.bg-dark-custom {
  background-color: #1e1e1e;
}

.hover-yellow:hover {
  background-color: #fdcb6e;
  transform: scale(1.02);
  transition: transform 0.5s ease;
}

.container {
  max-width: 1180px;
}

.bg-fdcb6e {
  background-color: #fdcb6e;
}

.services {
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  padding: 80px 25px;
}

.ftco-animated {
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.services .icon {
  line-height: 1.3;
  position: relative;
}

.services .media-body p {
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.services .media-body h3 {
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

h2 {
  font-size: 60px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.ftco-intro h2 span {
  background: #fdcb6e;
}

.ftco-section {
  padding: 7em 0;
  position: relative;
}

.ftco-section p {
  line-height: 1.8;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}</style>
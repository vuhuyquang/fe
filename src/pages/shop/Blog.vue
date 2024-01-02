<template>
  <Header />
  <section class="hero-wrap hero-wrap-2 js-fullheight"
    style="background-image: url('https://preview.colorlib.com/theme/evans/images/bg_3.jpg.webp'); height: 654px; background-position: 50% 77px;"
    data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end" style="height: 654px;">
        <div class="col-md-9 ftco-animate pb-5 fadeInUp ftco-animated">
          <h2 class="mb-3 bread">Bài Viết</h2>
          <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Trang chủ |</a></span> <span>Bài viết</span></p>
        </div>
      </div>
    </div>
  </section>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div v-for="(item, index) in featuredArticleList" :key="index" class="case">
            <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-8 d-flex">
                <a href="blog-single.html" class="img w-100 mb-3 mb-md-0"
                  style="background-image: url('https://preview.colorlib.com/theme/readit/images/image_1.jpg.webp');"></a>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-4 d-flex">
                <div class="text w-100 pl-md-3">
                  <span class="subheading">{{ item.category_name }}</span>
                  <h2><a href="blog-single.html">{{ item.title }}</a></h2>
                  <ul class="media-social list-unstyled">
                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </span></a>
                    </li>
                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-facebook">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </span></a>
                    </li>
                    <li class="ftco-animate fadeInUp ftco-animated"><a href="#"><span class="icon-instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </span></a>
                    </li>
                  </ul>
                  <div class="meta">
                    <p class="mb-0"><a href="#">{{ formatDatetimeToDate(item.created_at) }}</a> | <a href="#">{{ item.reading_time }} phút đọc</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <a-pagination v-model:current="pageInfo.page" :total="pageInfo.total"/>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from '~/components/shop/Header.vue'
import Footer from '~/components/shop/Footer.vue'
import postService from '~/service/postService'
import { formatDatetimeToDate } from '~/helpers/dateHelper.js'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      featuredArticleList: [],
      pageInfo: {
        perPage: 9,
        page: 1,
        total: null,
      }
    }
  },
  created() {
    this.getFeaturedArticle()
  },
  methods: {
    formatDatetimeToDate,
    getFeaturedArticle() {
      const params = {
        perPage: this.pageInfo.perPage,
        page: this.pageInfo.page
      }
      postService.getFeaturedArticle(params).then(response => {
        if (response?.data.success) {
          this.featuredArticleList = response.data.data.data
          this.pageInfo.total = response.data.data.total
          this.pageInfo.page = response.data.data.from
        }
      })
    }
  }
}
</script>

<style scoped>
.hero-wrap {
  width: 100%;
  position: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

@media (max-width: 1199.98px) {
  .hero-wrap {
    background-position: top center !important;
  }
}

.hero-wrap .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  opacity: .1;
  background: #fff;
}

@media (max-width: 1199.98px) {
  .hero-wrap .overlay {
    opacity: 0;
  }
}

.hero-wrap.hero-wrap-2 .overlay {
  background: #000000;
  width: 100%;
  opacity: .3;
}

.slider-text {
  position: relative;
  height: 800px;
}

.slider-text .breadcrumbs {
  font-size: 16px;
  margin-bottom: 20px;
  z-index: 99;
  font-weight: 400;
}

.slider-text .breadcrumbs span {
  color: rgba(255, 255, 255, 0.8);
}

.slider-text .breadcrumbs span i {
  color: rgba(255, 255, 255, 0.8);
}

.slider-text .breadcrumbs span a {
  color: white;
}

.slider-text .breadcrumbs span a:hover,
.slider-text .breadcrumbs span a:focus {
  color: #fdcb6e;
}

.slider-text .breadcrumbs span a:hover i,
.slider-text .breadcrumbs span a:focus i {
  color: #fdcb6e;
}

.slider-text .bread {
  font-weight: 900;
  color: #fff;
  font-size: 80px;
  font-family: "Poppins", Arial, sans-serif;
}

@media (max-width: 991.98px) {
  .slider-text .bread {
    font-size: 50px;
  }
}

.ftco-section {
  padding: 7em 0;
  position: relative;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.case {
  width: 100%;
  margin-bottom: 50px;
}

.case .text .subheading {
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

.case .text .media-social li {
  list-style: none;
  margin: 0 5px 0 0;
  display: inline-block;
}

.case .text .media-social li a {
  height: 50px;
  width: 50px;
  display: block;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  position: relative;
  color: #000000;
}

.case .text .media-social li a span {
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.case .text .meta p {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
}

.case .text .meta p a {
  color: rgb(68, 68, 68);
}
.case .text h2 a {
  color: #000000;
}

.case .text h2 a:hover {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
  color: gray;
}
.case .text .media-social li a:hover {
  background: #fdcb6e;
}

.case .text h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
}

.case .img {
  height: 400px;
}</style>
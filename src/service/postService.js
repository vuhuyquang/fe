import http from '~/service/http/index.js'

export default {
  getFeaturedArticle(params) {
    return http.get('/admin/posts/get-featured-article', {
      params: params
    })
  },
  getAll() {
    return http.get('/admin/posts')
  },
  addPost(data) {
    return http.post('/admin/posts/create', data)
  }
}
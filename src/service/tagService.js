import http from '~/service/http/index.js'

export default {
  getAll() {
    return http.get('/admin/tags')
  },
}
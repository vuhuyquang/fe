import http from '~/service/http/index.js'

export default {
  getAll() {
    return http.get('/admin/categories')
  },
  addCategory(data) {
    return http.post('/admin/categories/create', data)
  },
  getStatusActive() {
    return http.get('admin/categories/get-status-active')
  }
}
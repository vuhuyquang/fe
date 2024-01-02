import http from '~/service/http/index.js'

export default {
  getAll() {
    return http.get('/admin/roles')
  },
  getStatusActive() {
    return http.get('admin/roles/get-status-active')
  },
  addRole(data) {
    return http.post('/admin/roles/create', data)
  },
  delete(id) {
    return http.get(`/admin/roles/destroy/${id}`)
  }
}
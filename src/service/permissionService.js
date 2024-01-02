import http from '~/service/http/index.js'

export default {
  getAll() {
    return http.get('/admin/permissions')
  },
  getStatusActive() {
    return http.get('admin/permissions/get-status-active')
  }
}
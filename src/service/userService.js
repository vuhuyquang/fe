import http from '~/service/http/index.js'

export default {
  getAll() {
    return http.get('/admin/users')
  },
  addUser(data) {
    return http.post('/admin/users/create', data)
  }
}
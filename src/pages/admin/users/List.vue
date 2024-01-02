<template>
  <a-card title="Danh sách người dùng" class="w-100">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-end">
        <a-button type="primary" @click="showDrawer">
          <PlusOutlined />
        </a-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 table-responsive">
        <a-table v-if="isShowTable" :dataSource="users" :columns="columns" class="table">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'username'">
              <a-row>
                <a-col :span="22">
                  Tài khoản
                </a-col>
                <a-col :span="2">
                  <SearchOutlined :style="{ fontSize: '12px' }" class="text-black-50" />
                </a-col>
              </a-row>
            </template>
          </template>
          <template #bodyCell="{ column, index, record }">
            <template v-if="column.key === 'status'">
              <span v-if="record.status === 1">
                <a-tag color="#87d068">Hoạt động</a-tag>
              </span>
              <span v-if="record.status === 0">
                <a-tag color="#cd201f">Đang tạm khóa</a-tag>
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <a-space>
                <a-button type="primary">
                  <EditOutlined />
                </a-button>
                <a-button type="primary" danger>
                  <DeleteOutlined />
                </a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>

  <a-drawer title="Tạo tài khoản người dùng" :width="720" :visible="drawerCreate" :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }" @close="hideDrawer">
    <a-form layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Tài khoản" name="username">
            <a-input v-model:value="form.username" placeholder="Vui lòng nhập tài khoản" autocomplete="off" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Họ tên" name="fullname">
            <a-input v-model:value="form.fullname" placeholder="Vui lòng nhập họ tên" autocomplete="off" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Email" name="email">
            <a-input v-model:value="form.email" placeholder="Vui lòng nhập email" autocomplete="off" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Mật khẩu" name="password">
            <a-input v-model:value="form.password" placeholder="Vui lòng nhập mật khẩu" autocomplete="off" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Quyền" name="role_id">
            <a-select v-model:value="form.role_id" placeholder="Vui lòng chọn quyền">
              <a-select-option v-for="role in roles" :value="role.id">{{ role.role }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Trạng thái" name="status">
            <a-select v-model:value="form.status" placeholder="Vui lòng chọn trạng thái">
              <a-select-option :value="1">Active</a-select-option>
              <a-select-option :value="0">Inactive</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #extra>
      <a-space>
        <a-button @click="hideDrawer">Trở về</a-button>
        <a-button type="primary" @click="addUser">Lưu</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>

<script>
import userService from '~/service/userService.js'
import roleService from '~/service/roleService.js'
import { EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons-vue'

export default {
  created() {
    this.getUserList()
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    SearchOutlined
  },
  data() {
    return {
      drawerCreate: false,
      isShowTable: false,
      roles: [],
      columns: [
        {
          title: 'Tài khoản',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Họ tên',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Ngày tạo',
          dataIndex: 'created_at',
          key: 'created_at',
        },
        {
          title: 'Hành động',
          key: 'action',
          fixed: 'right',
        }
      ],
      form: {
        username: null,
        fullname: null,
        email: null,
        password: null,
        role_id: null,
        status: 1
      },
      users: []
    }
  },
  methods: {
    addUser() {
      let params = {
        username: this.form.username,
        fullname: this.form.fullname,
        email: this.form.email,
        password: this.form.password,
        role_id: this.form.role_id,
        status: this.form.status
      }
      userService.addUser(params).then(response => {
        if (response.data.success) {
          this.$message.success(response.data.message)
        } else {
          this.$message.error(response.data.message)
        }
      })
      .catch(error => {
        this.$message.error(error.response.data.message)
      })
      .finally(() => {
        this.hideDrawer()
        this.getUserList()
      })
    },
    showDrawer() {
      this.drawerCreate = true
      roleService.getStatusActive().then(response => {
        if (response.data.success) {
          this.roles = response.data.data
        }
      })
      .catch(error => {
        console.error(error)
      })
    },
    hideDrawer() {
      this.form = {
        username: null,
        fullname: null,
        email: null,
        password: null,
        role_id: null,
        status: 1
      }
      this.drawerCreate = false
    },
    getUserList() {
      userService.getAll().then(response => {
        if (response.data.success) {
          this.users = response.data.data
        }
      })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          this.isShowTable = true
        })
    }
  }
}
</script>
<template>
  <a-card title="Danh sách quyền" style="width: 100%">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-end">
        <a-button type="primary" @click="showDrawer">
          <PlusOutlined />
        </a-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a-table v-if="isShowTable" :dataSource="roles" :columns="columns" :scroll="{ x: 700 }">
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
                <a-button type="primary"><EditOutlined /></a-button>
                <a-button @click="deleteRole(record.id)" type="primary" danger><DeleteOutlined /></a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>

  <a-drawer title="Tạo mới quyền" :width="720" :visible="drawerCreate" :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }" @close="hideDrawer">
    <a-form layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Quyền" name="role">
            <a-input v-model:value="form.role" placeholder="Vui lòng nhập quyền" autocomplete="off" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Mô tả" name="fullname">
            <a-input v-model:value="form.description" placeholder="Vui lòng nhập mô tả" autocomplete="off" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Vai trò" name="permission">
            <a-checkbox-group v-model:value="form.permission" style="width: 100%">
              <a-row>
                <a-col v-for="item in permissions" :span="12">
                  <a-checkbox :value="item.id">{{ item.permission }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
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
        <a-button type="primary" @click="addRole">Lưu</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>
  
<script>
import roleService from '~/service/roleService.js'
import permissionService from '~/service/permissionService.js'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue'

export default {
  created() {
    this.getRoleList()
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    PlusOutlined
  },
  data() {
    return {
      drawerCreate: false,
      isShowTable: false,
      pageInfo: {
        perPage: 10,
        total: null
      },
      roles: [],
      columns: [
        {
          title: 'Quyền',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'Mô tả',
          dataIndex: 'description',
          key: 'description',
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
        role: null,
        description: null,
        status: 1,
        permission: null
      },
      permissions: []
    }
  },
  methods: {
    deleteRole(id) {
      roleService.delete(id).then(response => {
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
        this.getRoleList()
      })
    },
    addRole() {
      let params = {
        role: this.form.role,
        description: this.form.description,
        permission: Object.values(this.form.permission),
        status: this.form.status
      }
      roleService.addRole(params).then(response => {
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
        this.getRoleList()
      })
    },
    showDrawer() {
      permissionService.getStatusActive().then(response => {
        if (response.data.success) {
          this.permissions = response.data.data
          this.drawerCreate = true
        }
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        this.drawerCreate = true
      })
    },
    hideDrawer() {
      this.form = {
        role: null,
        description: null,
        status: 1
      }
      this.drawerCreate = false
    },
    getRoleList() {
      let params = {
        orderBy: 'id',
        orderByType: 'DESC',
        pageSize: this.perPage
      }
      roleService.getAll().then(response => {
        if (response.data.success) {
          this.roles = response.data.data
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
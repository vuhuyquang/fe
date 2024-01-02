<template>
  <a-card title="Danh sách vai trò" style="width: 100%">
    <div class="row">
      <div class="col-12">
        <a-table v-if="isShowTable" :dataSource="permissions" :columns="columns" :pagination="{ pageSize: 10 }">
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
              </a-space>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>
</template>
  
<script>
import permissionService from '~/service/permissionService.js'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'

export default {
  created() {
    this.getPermissionList()
  },
  components: {
    EditOutlined,
    DeleteOutlined
  },
  data() {
    return {
      isShowTable: false,
      pageInfo: {
        perPage: 10,
        total: null
      },
      permissions: [],
      columns: [
        {
          title: 'Vai trò',
          dataIndex: 'permission',
          key: 'permission',
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
      ]
    }
  },
  methods: {
    getPermissionList() {
      let params = {
        orderBy: 'id',
        orderByType: 'DESC',
        pageSize: this.perPage
      }
      permissionService.getAll().then(response => {
        if (response.data.success) {
          this.permissions = response.data.data
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
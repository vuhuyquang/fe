<template>
  <a-layout>
    <a-layout>
      <a-layout-sider width="100%" :style="{ background: '#fff' }">
        <a-menu class="my-2 rounded-3" mode="inline" theme="dark" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="categories">
            <template #title>
              <span>
                <UserOutlined /> Bài viết
              </span>
            </template>
            <a-menu-item key="posts">
              <RouterLink :to="{ name: 'posts' }">Danh sách</RouterLink>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="categories">
            <template #title>
              <span>
                <UserOutlined /> Danh mục
              </span>
            </template>
            <a-menu-item key="categories">
              <RouterLink :to="{ name: 'categories' }">Danh sách</RouterLink>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="users">
            <template #title>
              <span>
                <UserOutlined /> Người dùng
              </span>
            </template>
            <a-menu-item key="users">
              <RouterLink :to="{ name: 'users' }">Danh sách</RouterLink>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="roles">
            <template #title>
              <span>
                <TrademarkOutlined /> Vai trò
              </span>
            </template>
            <a-menu-item key="roles">
              <RouterLink :to="{ name: 'roles' }">Danh sách</RouterLink>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="permissions">
            <template #title>
              <span>
                <TeamOutlined /> Phân quyền
              </span>
            </template>
            <a-menu-item key="permissions">
              <RouterLink :to="{ name: 'permissions' }">Danh sách</RouterLink>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script>
import { UserOutlined, TrademarkOutlined, TeamOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Menu',
  components: {
    UserOutlined,
    TrademarkOutlined,
    TeamOutlined
  }
}
</script>
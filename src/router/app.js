const app = [
  {
    path: '/admin',
    component: () => import('~/components/admin/Layout.vue'),
    children: [
      {
        path: 'posts',
        name: 'posts',
        component: () => import('~/pages/admin/posts/List.vue'),
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('~/pages/admin/categories/List.vue'),
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('~/pages/admin/users/List.vue'),
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('~/pages/admin/roles/List.vue'),
      },
      {
        path: 'permissions',
        name: 'permissions',
        component: () => import('~/pages/admin/permissions/List.vue'),
      },
    ]
  },
  {
    path: '/login',
    component: () => import('~/pages/Login.vue')
  },
  {
    path: '/home',
    component: () => import('~/pages/shop/Home.vue')
  },
  {
    path: '/blog',
    component: () => import('~/pages/shop/Blog.vue')
  },
]

export default app
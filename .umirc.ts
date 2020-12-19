import { defineConfig } from 'umi';

export default defineConfig({
  esbuild: {},
  nodeModulesTransform: {
    type: 'none',
  },
  define: {
    API_HOST: 'https://localhost',
  },
  layout: {
    name: 'Irelia',
    layout: 'mix',
    navTheme: 'light',
    fixedHeader: true,
    fixSiderbar: true,
    siderWidth: 200,
  },
  routes: [
    {
      path: '/auth',
      component: '@/layouts/AuthLayout',
      layout: false,
      hideInMenu: true,
      routes: [
        {
          exact: true,
          path: '/auth/signin',
          name: '登录',
          component: '@/pages/Auth/Signin',
        },
        {
          exact: true,
          path: '/auth/signup',
          name: '注册',
          component: '@/pages/Auth/Signup',
        },
        {
          component: '@/pages/Exception',
        },
      ],
    },
    {
      path: '/',
      flatMenu: true,
      component: '@/layouts/ConsoleLayout',
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          exact: true,
          path: '/',
          name: '首页',
          icon: 'home',
          component: '@/pages/Console',
        },
        {
          path: '/org',
          name: '组织架构',
          icon: 'home',
          routes: [
            {
              path: '/org/role',
              name: '角色管理',
              component: '@/pages/Org/Role',
              access: '/org/role',
            },
          ],
        },
        {
          component: '@/pages/Exception',
        },
      ],
    },
  ],
});

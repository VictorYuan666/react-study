export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/login',
  //     },
  //   ],
  // },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  {
    path: '/hooks',
    name: 'hooks',
    icon: 'smile',
    routes: [
      {
        path: '/hooks',
        redirect: '/hooks/useState',
      },
      {
        path: '/hooks/useState',
        name: 'useState',
        icon: 'smile',
        component: './hooks/UseState',
      },
      {
        path: '/hooks/useEffect',
        name: 'useEffect',
        icon: 'smile',
        component: './hooks/UseEffect',
      },
      {
        path: '/hooks/useContext',
        name: 'useContext',
        icon: 'smile',
        component: './hooks/UseContext',
      },
      {
        path: '/hooks/customHooks',
        name: 'customHooks',
        icon: 'smile',
        component: './hooks/CustomHooks',
      },
      {
        path: '/hooks/useMemo',
        name: 'useMemo',
        icon: 'smile',
        component: './hooks/UseMemo',
      },
      {
        path: '/hooks/useCallback',
        name: 'useCallback',
        icon: 'smile',
        component: './hooks/UseCallback',
      },
      {
        path: '/hooks/useRef',
        name: 'useRef',
        icon: 'smile',
        component: './hooks/UseRef',
      },
      {
        path: '/hooks/useReducer',
        name: 'useReducer',
        icon: 'smile',
        component: './hooks/UseReducer',
      },

      {
        path: '/hooks/usefulExample',
        name: '常见应用示例',
        icon: 'smile',
        component: './hooks/UsefulExample',
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './ListTableList',
  // },
  {
    path: '/',
    redirect: '/hooks',
  },
  {
    component: './404',
  },
];

import { createRouter, createWebHistory } from 'vue-router'
import {Home, Login, Register, UserDashboard, AdminDashboard, Employee, DetailEmployee, AddEmployee, EditEmployee, AddProject, DetailProject} from '@/views'

const routes = [
  //
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        layout: 'default',
        title: 'Frontend::Test | Arca::International'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        layout: 'default',
        title: 'Frontend::Test | Login-Arca::International'
    }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
    meta: {
        layout: 'default',
        title: 'Frontend::Test | Register-Arca::International'
    }
  },
  {
    path: '/dashboard/user',
    name: 'dashboard.user',
    component: UserDashboard,
    meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Dashboard::User'
    }
  },
  {
    path: '/dashboard/admin',
    name: 'dashboard.admin',
    component: AdminDashboard,
    meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Dashboard::Admin'
    }
  },
   {
    path: '/dashboard/employee',
    name: 'dashboard.employee',
    component: Employee,
    meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Dashboard::Employee'
    }
  },
  {
    path: '/dashboard/detail/employee/:id',
    name: 'dashboard.employee.detail',
    component: DetailEmployee,
    meta: {
      layout: 'dashboard',
      title: 'Frontend::Test | Detail::Employee'
    }
  },
  {
    path: '/dashboard/add/employee',
    name: 'dashboard.employee.add',
    component: AddEmployee,
    meta: {
      layout: 'dashboard',
      title: 'Frontend::Test | Add::Employee'
    }
  },
  {
      path: '/dashboard/edit/employee/:id',
      name: 'dashboard.employee.edit',
      component: EditEmployee,
      meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Edit::Employee'
      }
  },
  {
      path: '/dashboard/add/projects',
      name: 'dashboard.project.add',
      component: AddProject,
      meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Add::Project'
      }
  },
  {
      path: '/dashboard/detailprojects',
      name: 'dashboard.project.detail',
      component: DetailProject,
      meta: {
        layout: 'dashboard',
        title: 'Frontend::Test | Detail::Project'
      }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next()
})
export default router

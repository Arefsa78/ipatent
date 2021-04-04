import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: {
            name: "HomePage"
        }
    },
    {
        path: "/home",
        name: "HomePage",
        component: () => import("@/views/home"),
        meta: {
            action: 'read'
        }
    },
    {
        path: "/idea-process",
        name: "IdeaProcess",
        component: () => import("@/views/idea-process"),
        meta: {
            action: 'read'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/log-in"),
        meta: {
            action: "access",
            resource: 'authenticate'
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import("@/views/sign-up"),
        meta: {
            action: "access",
            resource: 'authenticate'
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import("@/views/profile"),
        meta: {
            action: "access",
            resource: 'authenticate'
        }
    },
    {
        path: '/new-idea',
        name: 'NewIdea',
        component: () => import("@/views/new-idea"),
        meta: {
            action: "access",
            resource: 'authenticate'
        }
    },
    {
        path: '/rules',
        name: 'Rules',
        component: () => import("@/views/rules"),
        meta: {
            action: "read",
        }
    },
    // {
    //     path: '*',
    //     name: 'Error404',
    //     component: () => import("../views/Error404")
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     const canNavigate = to.matched.some(route => {
//         return ability.can(route.meta.action || 'read', route.meta.resource)
//     });
//     if (!canNavigate && to.name === "Announcement" && !store.getters["authModule/isAuthenticated"]) {
//         next({name: "Login"});
//     } else if (!canNavigate && to.name !== 'NotAllowed') {
//         next({name: "NotAllowed"})
//     } else {
//         next()
//     }
// })

export default router
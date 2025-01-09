// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "./views/UserLogin.vue";
import UserRegister from "./views/UserRegister.vue";
import UserDashboard from "./views/UserDashboard.vue";
import MainDashboard from "./views/MainDashboard.vue";
import { auth } from "./firebase";

const routes = [
  { path: "/", redirect: "/dashboard" }, // Redirect root path to dashboard
  {
    path: "/login",
    component: UserLogin,
    meta: { requiresUnauth: true }, // Only accessible if unauthenticated
  },
  {
    path: "/register",
    component: UserRegister,
    meta: { requiresUnauth: true }, // Only accessible if unauthenticated
  },
  {
    path: "/dashboard",
    component: MainDashboard, // Use the Dashboard component
    meta: { requiresAuth: true }, // Only accessible if authenticated
  },
  {
    path: "/dashboard/all-events",
    component: UserDashboard,
    meta: { requiresAuth: true },
    props: { activeTab: "allEvents" },
  },
  {
    path: "/dashboard/my-events",
    component: UserDashboard,
    meta: { requiresAuth: true },
    props: { activeTab: "myEvents" },
  },
  {
    path: "/dashboard/add-event",
    component: UserDashboard,
    meta: { requiresAuth: true },
    props: { activeTab: "addEvent" },
  },
  { path: "/:pathMatch(.*)*", redirect: "/dashboard" }, // Redirect all other paths to dashboard
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to protect routes
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some((record) => record.meta.requiresUnauth);

  // Wait for Firebase to initialize and check the authentication state
  await new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe(); // Unsubscribe after the first call
      resolve(user);
    });
  });

  const isAuthenticated = !!auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/login"); // Redirect to login if not authenticated
  } else if (requiresUnauth && isAuthenticated) {
    next("/dashboard"); // Redirect to dashboard if authenticated
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
import { createWebHistory, createRouter } from "vue-router";
import Calendar from "../views/calendar.vue";

const routes = [
  {
    path: "/",
    name: "Academic Calendar",
    component: Calendar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
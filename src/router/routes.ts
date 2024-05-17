import Home from "@/views/microPowerGrid/index.vue";
import Dashboard from "@/views/dashboard/index.vue";

export const routes: any = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

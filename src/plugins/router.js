import Vue from "vue";
import VueRouter from "vue-router";

import Create from "@/components/Create";
import Dashboard from "@/components/Dashboard";
import MOC from "@/components/MOC";
import MOCA from "@/components/MOCA";
import MOCList from "@/components/MOCList";
import Inbox from "@/components/Inbox";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/initiate", component: Create },
    { path: "/dashboard", component: Dashboard },
    { path: "/mocs", component: MOCList },
    { path: "/mocs/:id", component: MOC },
    { path: "/mocsa/:id", component: MOCA },
    { path: "/inbox", component: Inbox }
  ]
});

Vue.use(VueRouter);

export default router;

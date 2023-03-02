import { createRouter, createWebHistory } from "vue-router";

import notFound from "@/views/NotFound.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files
/*import routesEngHope from "./routesEngHope.js";
import routesEngMultiply1 from "./routesEngMultiply1.js";
import routesEngMultiply2 from "./routesEngMultiply2.js";
import routesEngMultiply3 from "./routesEngMultiply3.js";
import routesEngProphet from "./routesEngProphet.js";
import routesEngTc from "./routesEngTc.js";
*/
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "notfound",
      component: notFound,
    }
/*
    ...routesEngHope,
    ...routesEngMultiply1,
    ...routesEngMultiply2,
    ...routesEngMultiply3,
    ...routesEngProphet,
    ...routesEngTc,

    {
      path: "/index",
        name: "eng-index",
        component: function () {
          return import(
            / webpackChunkName: "prototype" / "../views/M2/eng/index.vue"
          );
        }
    },


    {
        path: "/M2/eng/seek",
        name: "eng-seek-index",
        component: function () {
          return import(
             webpackChunkName: "prototype"  "../views/M2/eng/seek.vue"
          );
        },
    },
    {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: notFound,
    }
    */
  ],
});

export default router;
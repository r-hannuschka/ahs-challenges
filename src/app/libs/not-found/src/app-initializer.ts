import { Router } from "@angular/router";
import { PageNotFoundComponent } from "./page";

export function notFoundAppInitializer(router: Router) {
  const routerConfig = router.config;
  let index = routerConfig.length - 1;

  for (; index > 0; index--) {
    const route = routerConfig[index];
    if (route.path !== "**") {
      break;
    }
  }

  // attach our own route to configuration before ** route
  routerConfig.splice(index + 1, 0, {
    path: "**",
    component: PageNotFoundComponent,
  });
}

import { createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

import PageTransition from "@/components/PageTransition"
import Header from "@/components/menu_header/Header"

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <PageTransition />
      <TanStackRouterDevtools />
    </>
  ),
})

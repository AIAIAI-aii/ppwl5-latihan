/* =========================
    # User Route
    2. user.route.ts menjalankan elysia `const userRoutes = new Elysia()`
    3. Gunakan kode ini di user.route.ts (import user.service, user.view, & response.ts):
      .get("/", () => {
        const users = userService.getAll();
        return htmlResponse(userView(users));
      })

      .post("/create", async ({ body }) => {
        const data = body as any;
        userService.create({ name: data.name, role: data.role });
        return redirect("/");
      })

      .post("/delete/:id", ({ params }) => {
        userService.delete(Number(params.id));
        // jalankan return redirect ke root
      });
========================= */

import { Elysia } from "elysia";
import { userService } from "../services/user.service.ts";
import { userView } from "../views/user.view.ts";
import { htmlResponse, redirect } from "../utils/response.ts";

export const userRoutes = new Elysia()

  .get("/", () => {
    const users = userService.getAll();
    return htmlResponse(userView(users));
  })

  .post("/create", async ({ body }) => {
    const data = body as any;
    userService.create({ name: data.name, role: data.role });
    return redirect("/");
  })

  .post("/delete/:id", ({ params }) => {
    userService.delete(Number(params.id));
    return redirect("/");
  });
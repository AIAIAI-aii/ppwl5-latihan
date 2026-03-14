import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";  // import staticPlugin dari @elysiajs/static 
import { userRoutes } from "./routes/user.route"; // import userRoutes dari user.route.ts

// # App
//   4. app.ts menjalankan `const app = new Elysia().use(userRoutes);` (jangan lupa export app)

export const app = new Elysia()
  .use(// agar css dapat dipanggil lewat SSR 
    staticPlugin({
      assets: "public",
      prefix: "/"
    })
  )
  .use(userRoutes);

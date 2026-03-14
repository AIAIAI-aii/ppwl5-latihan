/* =========================
    # Server
    3. Fungsi initDB diletakkan dalam config/db.ts
    4. server.ts mengimport app, env, & initDB
    5. server.ts menjalankan `app.listen(env.PORT)`, initDB(), & console.log(`🚀 Server running ...`)
========================= */
import { app } from "./app.ts";
import { env } from "./config/env.ts";
import { initDB } from "./config/db.ts";

initDB();

app.listen(env.PORT);

console.log(`🚀 Server running at http://localhost:${env.PORT}`);

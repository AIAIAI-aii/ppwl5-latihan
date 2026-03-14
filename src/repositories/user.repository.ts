    /* =========================
    REPOSITORY (SQLite)
    Tugas:
        1. Pindahkan ke file khusus (user.repository), dalam folder yang sesuai
        2. gunakan export const ...
        3. tambahkan delete(id: number) dengan query "DELETE FROM users WHERE id = ?"
    ========================= */
    import { db } from "../config/db";
    import type { User } from "../types/user.type";

export const userRepository = {
    findAll(): User[] {
        return db.query("SELECT id, name, role FROM users").all() as User[];
    },

    create(user: User) {
        db.query("INSERT INTO users (name, role) VALUES (?, ?)")
        .run(user.name, user.role);
    },

    update(id: number, user: User) {
        db.query("UPDATE users SET name = ?, role = ? WHERE id = ?")
        .run(user.name, user.role, id);
    },

    delete(id: number) {
        db.query("DELETE FROM users WHERE id = ?")
        .run(id);
}};

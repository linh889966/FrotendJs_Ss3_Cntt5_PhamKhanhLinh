export type Role = "admin" | "user";
export type User = { email: string; password: string; role: Role };

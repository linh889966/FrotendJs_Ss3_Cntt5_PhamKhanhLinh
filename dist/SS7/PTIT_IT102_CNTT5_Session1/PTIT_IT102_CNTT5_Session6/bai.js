"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminAcc extends Account {
    constructor(id, userName, password) { super(id, userName, password, "admin"); }
    banUser(userAcc) {
        userAcc.status = "banned";
        console.log(`User ${userAcc.userName} has been banned`);
    }
}
const admin = new AdminAcc(99, "root", "root");
admin.banUser(u1);
u1.login("123");
//# sourceMappingURL=bai.js.map
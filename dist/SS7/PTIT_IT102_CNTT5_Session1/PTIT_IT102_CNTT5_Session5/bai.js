"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(id, userName, password, role = "user") {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(pass) {
        if (this.password === pass) {
            this.isLogin = true;
            console.log(`${this.userName} login success`);
            return true;
        }
        console.log(`${this.userName} login failed`);
        return false;
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} logged out`);
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, status = "active") {
        super(id, userName, password, "user");
        this.status = status;
    }
    login(pass) {
        if (this.status === "banned") {
            console.log(`${this.userName} is banned`);
            return false;
        }
        return super.login(pass);
    }
}
const u1 = new UserAcc(1, "alice", "123");
u1.login("123");
u1.logout();
//# sourceMappingURL=bai.js.map
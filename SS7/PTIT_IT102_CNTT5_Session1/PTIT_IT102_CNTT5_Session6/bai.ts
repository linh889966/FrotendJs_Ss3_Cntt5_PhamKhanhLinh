import java.util.*;

enum Status { ACTIVE, BANNED }

class Account {
    protected int id;
    protected String userName;
    protected String password;
    protected boolean isLogin;
    protected String role;

    public Account(int id, String userName, String password, String role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    public void login() { isLogin = true; System.out.println("Đăng nhập thành công"); }
    public void logout() { if (isLogin) { System.out.println("Đăng xuất thành công"); isLogin = false; } }
}

class UserAcc extends Account {
    private Status status;

    public UserAcc(int id, String userName, String password, String role, Status status) {
        super(id, userName, password, role);
        this.status = status;
    }

    @Override
    public void login() {
        if (status == Status.ACTIVE) { isLogin = true; System.out.println("Đăng nhập thành công"); }
        else System.out.println("Tài khoản đã bị khóa");
    }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
    public int getId() { return id; }
    public String toString() { return userName + "(" + id + ") - " + status; }
}

class AdminAcc extends Account {
    public AdminAcc(int id, String userName, String password) {
        super(id, userName, password, "admin");
    }

    public boolean banUser(List<UserAcc> users, int userId) {
        for (UserAcc u : users) {
            if (u.getId() == userId) { u.setStatus(Status.BANNED); return true; }
        }
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        List<UserAcc> users = new ArrayList<>();
        users.add(new UserAcc(1, "linh", "123", "user", Status.ACTIVE));
        users.add(new UserAcc(2, "huy", "abc", "user", Status.ACTIVE));

        AdminAcc admin = new AdminAcc(99, "admin", "root");

        System.out.println(users);
        admin.banUser(users, 2);
        System.out.println(users);

        users.get(1).login();
        users.get(0).login();
    }
}

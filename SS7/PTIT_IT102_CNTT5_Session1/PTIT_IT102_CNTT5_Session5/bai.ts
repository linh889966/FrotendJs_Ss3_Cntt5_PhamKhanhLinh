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
        this.isLogin = false;
    }

    public void login() {
        isLogin = true;
        System.out.println("Đăng nhập thành công");
    }

    public void logout() {
        if (isLogin) {
            System.out.println("Đăng xuất thành công");
            isLogin = false;
        }
    }
}

class UserAcc extends Account {
    private Status status;

    public UserAcc(int id, String userName, String password, String role, Status status) {
        super(id, userName, password, role);
        this.status = status;
    }

    @Override
    public void login() {
        if (status == Status.ACTIVE) {
            isLogin = true;
            System.out.println("Đăng nhập thành công");
        } else {
            System.out.println("Tài khoản đã bị khóa");
        }
    }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }
}

public class Main {
    public static void main(String[] args) {
        UserAcc a1 = new UserAcc(1, "linh", "123", "user", Status.ACTIVE);
        UserAcc a2 = new UserAcc(2, "huy", "abc", "user", Status.BANNED);

        a1.login();
        a1.logout();

        a2.login();
        a2.logout();
    }
}

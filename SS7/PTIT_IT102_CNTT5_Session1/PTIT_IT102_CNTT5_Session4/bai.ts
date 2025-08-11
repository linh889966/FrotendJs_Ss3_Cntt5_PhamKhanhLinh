abstract class Person {
    protected String name;

    public Person(String name) {
        this.name = name;
    }

    public abstract void displayInfo();
}

class Student extends Person {
    private String studentId;

    public Student(String name, String studentId) {
        super(name);
        this.studentId = studentId;
    }

    @Override
    public void displayInfo() {
        System.out.println("Student Name: " + name + ", ID: " + studentId);
    }
}

class Teacher extends Person {
    private String subject;

    public Teacher(String name, String subject) {
        super(name);
        this.subject = subject;
    }

    @Override
    public void displayInfo() {
        System.out.println("Teacher Name: " + name + ", Subject: " + subject);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Nguyen Van A", "SV001");
        Teacher t = new Teacher("Tran Thi B", "Mathematics");

        s.displayInfo();
        t.displayInfo();
    }
}

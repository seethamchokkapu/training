package Seetham;

 class Member {
	String name;
	int age;
	String phonenumber;
	String adress;
	int salary;
	void printsalary(){
		System.out.println(name);
		System.out.println(age);
		System.out.println(phonenumber);
		System.out.println(adress);
		System.out.println(salary);
		
	}
 }
 class Employee extends Member
 {
	String specilization;
 }
 class Manager extends Member
 {
	 String department;
 }
 public class Rajam
 {
	 public static void main(String[] args) {
		 
		 Employee a=new Employee();
		 Manager b=new Manager();
		  a.name=" 1.seetham";
		  a.age=21;
		  a.phonenumber="5256352526";
		  a.adress="jibdfjvnf";
		  a.salary=12000;
		  a.printsalary();
		  
		  
		  b.name="2.satya";
		  b.age=22;
		  b.phonenumber="525677656";
		  b.adress="kkkbdfjvnf";
		  b.salary=16000;
		  b.printsalary();
	}
 }
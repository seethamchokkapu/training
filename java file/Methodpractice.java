package Seetham;

public class Methodpractice {
	int x;
	String value;
	public Methodpractice(int a,String b) {
		x=a;
		value=b;
		
	}
     public static void main(String[] args) {
    	 Methodpractice f=new Methodpractice(76, "war");
    	 System.out.println(f.x+ " "+f.value);
	}
	
}

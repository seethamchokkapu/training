package Seetham;

 class Bobbili{
	void valasa() {
		System.out.println("this is a parent class");
	}

 }
class sitanagaram extends Bobbili{
	void bogi() {
		System.out.println("this is a child class ");
		
		
	}
} public class Parvathipuram{
	public static void main(String[] args) {
		Bobbili b=new Bobbili();
		sitanagaram s=new sitanagaram();
		b.valasa();
		s.bogi();
		s.valasa();
	}
}

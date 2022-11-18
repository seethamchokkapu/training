package Seetham;

 class Polymorphism2 {
	int x=10;int y=20;
	int sum() {
		return(x+y);
		
	}

}
 class Polymorphism3 extends Polymorphism2 {
	 int a=60;int b=40;
	 int mal() {
		 return(a+b);
		 
	 }
 }
class Polymorphism4 extends Polymorphism3{
	int c=70;int d=80;
	int vadd() {
		return(c+d);
	}
}
 class Polymorphism extends Polymorphism4{
	 public static void main(String[] args) {
		 Polymorphism4 k=new Polymorphism4();
	int j=k.sum()+k.mal()+k.vadd();
		 
		 System.out.println(j);
	}
 }
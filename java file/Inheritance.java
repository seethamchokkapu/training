package Seetham;

 class Inheritance2 
{
	 int x=90;int y=40;
	 int  sum() 
	 {
	return (x+y);
	}
}
class Inheritance extends Inheritance2
{
	public static void main(String args[]) 
	{
		Inheritance f=new Inheritance();
		int g= f.sum();
		System.out.println(g);
		
	}
	
}

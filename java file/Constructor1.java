package Seetham;


  class Naidu2
  {
	  int x,y,total;
	  Naidu2(int a,int b)
	  {
		  x=a;
		  y=b;
	  }
	  
	  int sum() 
	  {
		  return(x+y);
	  }
  }  
  public class Constructor1 {
		public static void main(String[] args) {
			Naidu2 f=new Naidu2(10,29);
			int g=f.sum();
			System.out.println(g);
			
		}

	} 
	 
	  
  

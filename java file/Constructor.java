package Seetham;

class naidu 
{
	int a,b;
	
    naidu(int x,int y)
    {	
	    a=x;
	    b=y;
	}
    int sum() 
     {
		return(a+b);
		
	}
}

	public class Constructor
	{
		public static void main(String[] args)
		{
			naidu o1=new naidu(10,20);
			int a=o1.sum();
			System.out.print(a);
			
			
		}
		
	}





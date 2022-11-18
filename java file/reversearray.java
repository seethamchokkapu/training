package whileloop2;

public class reversearray {
	public static void main(String args[]) {
		int a[]= {4,5,8,3,9,};
		System.out.println("original array");
		for ( int i=0;i<a.length;i++) {
		System.out.println(a[i]+"");
		
		}
		System.out.println("reverse array");
		  for (int i = 4; i >= 0; i--) { 
			  System.out.println(a[i]);
		  }
		}
	}



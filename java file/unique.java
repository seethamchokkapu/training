package whileloop2;

public class unique {
	public static void main(String args[]) {
		   int a[]= {15,23,15,22,77};
	        int b[]=new int[5];
	        int count=0;
	        for(int i=0;i<5;i++) {
	            for(int j=i+1;j<4;j++) {

	                if(a[i]==a[j])
	                {
	                    count++;
	                }
	            }
	        }
	                if(count==0) {
	                    System.out.println(" Array values are unique");
	                }
	                else {
	                    System.out.println(" Array values are not unique");

	                } 
	}

}

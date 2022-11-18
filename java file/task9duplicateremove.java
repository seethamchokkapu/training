package whileloop2;

public class task9duplicateremove {
	public static void main(String args[]) {
		int a[]= {20,20,30,40,50,50,50};
		for(int i=0;i<a.length;i++) {
			for(int j=i+1;j<a.length;j++) {
				if(a[i]!=a[j]) {
					
				}
				int temp;
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
				System.out.println(a[i]);
				
			}
		}
		
	}

}

package whileloop2;

public class Task10triplessum {
	public static void main(String args[]) {
		int a[]= {1,-2,0,5,-1,-4};
		for(int i=0;i<a.length;i++) {
		for(int j=0;j<a.length;j++) {
		for(int k=0;k<a.length;k++) {
		if(a[i]!=a[j]&&a[j]!=a[k]&&a[k]!=a[i]) {
			if(a[i]+a[j]+a[k]==2) {
				System.out.println( a[i]+"  "+a[j]+"  "+a[k]);
			}
		}
		}
	}

		}
	}
}
	

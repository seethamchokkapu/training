
public class Atmtask {
	  static int acpw[][]= {{939233,63050},{1234,5678},{654,6755}};
	    public static void main(String[] args)
	    {
	        Scanner sc=new Scanner(System.in);
	        int i=0;
	        while(i<acpw.length)
	        {
	        System.out.println("WELCOME");
	        System.out.println("enter your ac no");
	        int acno=sc.nextInt();
	        for(int j=0;j<3;j++) {
	            
	        if(acpw[0][i]==acno||acpw[0][++i])
	        {
	            System.out.println("enter your password");
	            int password=sc.nextInt();
	        if(acpw[++i][j]==password)
	            {
	                System.out.println("wecome to naidus bank youracno is="+acno);break;
	                
	            }
	        }else  {
	            System.out.println("your ac details are wrong please reenter ac details");i=0;break;


	       
	            
	
}
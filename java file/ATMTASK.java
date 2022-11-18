package whileloop2;

import java.util.Scanner;

public class ATMTASK {
	static int acpw[][] = { { 939233, 63050 }, { 1234, 5678 }, { 654, 7654 } };

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int i = 0;
		while (i < 2) {
			System.out.println("WELCOME");
			System.out.println("enter your ac no");
			int acno = sc.nextInt();
			for (int j = 0; j < 2; j++) {

				if (acpw[i][j] == acno || acpw[i][++j] == acno) {
					System.out.println("enter your password");
					int password = sc.nextInt();
					if (acpw[++i][j] == password || acpw[i++][j++] == password) {
						System.out.println("wecome to naidus bank your acno is=" + acno);
						/*
						 * System.out.println("choose your option"); int option=sc.nextInt();
						 */ 
						System.out.println("option1.check bank balnce");
						System.out.println("option2.withdraw");
						System.out.println("option3.deposit");
						System.out.println("option4.exist");
						System.out.println("choose your option");
						int option = sc.nextInt();
						if (option == 1) {
							System.out.println("your ac balance is=" + acpw[++i][j]);
							i = 0;
							break;
						}
						if (option == 2) {
							System.out.println("your option is withdrawal amout");
							System.out.println("it will be coming soon");
							i = 0;
							break;

						}
						if (option == 3) {
							System.out.println("your option is deposit amount");
							System.out.println("it will be coming soon");
							i = 0;
							break;
						}
						if (option == 4) {
							System.out.println("exit");
							System.out.println("thank you visit again");
							i = 0;
							break;

						}
						else{
							System.out.println("your option is wrong please reenter correct option");
							break;
						}
					}
					else if(acpw[++i][j] != password || acpw[i++][j++] != password){
						System.out.println("your password details are wrong please reenter ac details");
						i = 0;
				}

				/*else {
					System.out.println("your ac details are wrong please reenter ac details");
					i = 0; */

				}
				
			
				else {
					System.out.println("your ac details are wrong please reenter ac details");
					i = 0; 

		}

	}
	}
}
}

package Seetham;

 class Rectangle {
	int length;
	int breadth;
	public Rectangle(int l,int b) {
	length=l;
	breadth=b;
	}
	void area () 
	{
		System.out.println("area of the rectangle="+(length*breadth));
		
	}
	void perimeter(){
		System.out.println("perimeter of the rectangle="+(2*(length+breadth)));
		
		
	}

}
    class Square extends Rectangle{
      public Square(int s){
    		  super(s,s);
    	 }
    }
    public class Triangle{
    	public static void main(String[] args) {
			Rectangle f=new Rectangle(4,5);
			f.area();
			f.perimeter();
			Square s=new Square(7);
			s.area();
			s.perimeter();
			
		}
    }

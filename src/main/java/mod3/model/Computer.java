package mod3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


// -This is the parent table

@Entity
@Table(name="computers")

// "Computers" table for desktop PCs only
public class Computer {
	@Id
	private int id; // Unique identifier for PCs
	private float price; // "price" field in Computers table is a decimal type with 8 slots and 2 decimal points
    private String OS;
    private int releaseYear;
      
    public Computer()
    {
    	
    }
    
    public Computer(int id, float price, String OS, int releaseYear) {
		super();
		this.id = id;
		this.price = price;
		this.OS = OS;
		this.releaseYear = releaseYear;
	}
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getOS() {
		return OS;
	}
	public void setOS(String OS) {
		this.OS = OS;
	}
	public int getreleaseYear() {
		return releaseYear;
	}
	public void setreleaseYear(int releaseYear) {
		this.releaseYear = releaseYear;
	}
	
}

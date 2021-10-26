package mod3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mod3.model.Computer;
import mod3.repository.ComputerRepository;
import mod3.exceptions.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ComputerController {

@Autowired
	private ComputerRepository computerRepo;
    


	//get all students
	
	@GetMapping("/allstudents")
	public List<Computer> getAllComputers()
	{
		
		return computerRepo.findAll();
	}
	

	@PostMapping("/addstudent")
    public Computer newComputer(@RequestBody Computer s)
    {
		
		return computerRepo.save(s);
    }
	
	
	@GetMapping("/student/{id}")
	public ResponseEntity<Computer> getComputerById(@PathVariable int id)
	{
		Computer s = computerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Computer not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/computers/{price}")
	public List<Computer> getComputerByPrice(@PathVariable float price)
	{
		//return studentRepo.findByName(name);
		
		List <Computer> computers=computerRepo.findByPrice(price);
		if(computers.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("There are no computer(s) that cost $"+ price +"."));
		}
		
		return computerRepo.findByPrice(price);
	}
	
	
	@PutMapping("/computer/{id}")
	public ResponseEntity<Computer> updateComputer(@PathVariable int id, @RequestBody Computer computer)
	{
		Computer s= computerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Computer not found"));
	    s.setPrice(computer.getPrice());
//	    s.setOS(computer.getOS());
	    Computer updatedComputer = computerRepo.save(s);
	    return ResponseEntity.ok(updatedComputer);
	}
	

	
	@DeleteMapping("/computer/{id}")
	public String deleteStudent(@PathVariable int id)
	{
		computerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Computer not found"));
	    computerRepo.deleteById(id);
	    return "The computer with id: #"+ id +" is removed from the database.";
	}
	
}

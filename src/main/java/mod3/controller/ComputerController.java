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
@RequestMapping("/ctapi/")
public class ComputerController {

@Autowired
	private ComputerRepository computerRepo;
    


	//get all computers
	
	@GetMapping("/allcomputers")
	public List<Computer> getAllComputers()
	{
		
		return computerRepo.findAll();
	}
	

	@PostMapping("/addcomputer")
    public Computer newComputer(@RequestBody Computer s)
    {	
		System.out.println(s);
		return computerRepo.save(s);
    }
	
	
	@GetMapping("/computer/{id}")
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
	
	@GetMapping("/computers/{OS}")
	public List<Computer> getComputerByOS(@PathVariable String OS)
	{	
		List <Computer> computers=computerRepo.findByOS(OS);
		if(computers.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("There are no computer(s) that use that"+ OS +"."));
		}
		
		return computerRepo.findByOS(OS);
	}
	
	@GetMapping("/computers/{releaseYear}")
	public List<Computer> getComputerByreleaseYear(@PathVariable int releaseYear)
	{
		List <Computer> computers=computerRepo.findByReleaseYear(releaseYear);
		if(computers.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("There are no computer(s) that were made during the year"+ releaseYear +"."));
		}
		
		return computerRepo.findByReleaseYear(releaseYear);
	}
	
	
	@PutMapping("/computer/{id}")
	public ResponseEntity<Computer> updateComputer(@PathVariable int id, @RequestBody Computer computer)
	{
		Computer s= computerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Computer not found"));
	    s.setPrice(computer.getPrice());
	    s.setOS(computer.getOS());
	    s.setreleaseYear(computer.getreleaseYear());
	    Computer updatedComputer = computerRepo.save(s);
	    return ResponseEntity.ok(updatedComputer);
	}
	

	
	@DeleteMapping("/computer/{id}")
	public String deleteComputer(@PathVariable int id)
	{
		computerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Computer not found"));
	    computerRepo.deleteById(id);
	    return "The computer with id: #"+ id +" is removed from the database.";
	}
	
}

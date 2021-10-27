package mod3.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import mod3.model.Computer;


@Repository
public interface ComputerRepository extends JpaRepository<Computer, Integer>{

	List<Computer> findByPrice(float price);
//	List<Computer> findByOS(String OS);
//	List<Computer> findByReleaseYear(int ReleaseYear);
}

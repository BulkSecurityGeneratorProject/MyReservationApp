package dumitru.adrian.myreservationapp.repository;

import dumitru.adrian.myreservationapp.domain.Location;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Location entity.
 */
public interface LocationRepository extends JpaRepository<Location,Long> {

}

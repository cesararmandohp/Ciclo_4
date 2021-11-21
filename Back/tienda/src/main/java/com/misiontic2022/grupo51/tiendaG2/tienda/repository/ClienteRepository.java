package com.misiontic2022.grupo51.tiendaG2.tienda.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.misiontic2022.grupo51.tiendaG2.tienda.model.Cliente;
import java.util.List;

public interface ClienteRepository extends MongoRepository<Cliente,String>{
	
	List<Cliente>findByCedula (Long cedula);
	
	List<Cliente>findByNombrecliente (String nombrecliente);

}

package com.misiontic2022.grupo51.tiendaG2.tienda.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.misiontic2022.grupo51.tiendaG2.tienda.model.Cliente;
import com.misiontic2022.grupo51.tiendaG2.tienda.repository.ClienteRepository;


@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ClienteController {
	
	@Autowired
	ClienteRepository clienteRepository;
	
	
	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) String nombrecliente) {
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (nombrecliente == null) {
				clienteRepository.findAll().forEach(clientes::add);
			} else {
				clienteRepository.findByNombrecliente(nombrecliente).forEach(clientes::add);
			}

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	 @GetMapping("/clientes/{id}")
	  public ResponseEntity<Cliente> getClienteById(@PathVariable("id") String id) {
	    Optional<Cliente> clienteData = clienteRepository.findById(id);

	    if (clienteData.isPresent()) {
	      return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

	  @PostMapping("/clientes")
	  public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) {
	    try {
	      Cliente _cliente = clienteRepository.save(new Cliente(cliente.getCedula(),
	    		  cliente.getNombrecliente(),cliente.getDireccion(),cliente.getTelefono(),cliente.getEmailcliente()));
	      return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

	  
	  @PutMapping("/clientes/{id}")
	  public ResponseEntity<Cliente> updateCliente(@PathVariable("id") String id, @RequestBody Cliente cliente) {
	    Optional<Cliente> clienteData = clienteRepository.findById(id);

	    if (clienteData.isPresent()) {
	      Cliente _cliente = clienteData.get();
	      _cliente.setNombrecliente(cliente.getNombrecliente());
	      _cliente.setDireccion(cliente.getDireccion());
	      _cliente.setTelefono(cliente.getTelefono());
	      _cliente.setEmailcliente(cliente.getEmailcliente());
	      return new ResponseEntity<>(clienteRepository.save(_cliente), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

	  @DeleteMapping("/clientes/{id}")
	  public ResponseEntity<HttpStatus> deleteUsuarios(@PathVariable("id") String id) {
	    try {
	    	clienteRepository.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

	  @DeleteMapping("/clientes")
	  public ResponseEntity<HttpStatus> deleteAllUsuarioss() {
	    try {
	    	clienteRepository.deleteAll();
	      return new ResponseEntity<>(HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

	  @GetMapping("/clientes/nombrecliente/{nombrecliente}")
	  public ResponseEntity<List<Cliente>> findByNombrecliente(@PathVariable("nombrecliente") String nombrecliente) {
	    try {
	      List<Cliente> clientes = clienteRepository.findByNombrecliente(nombrecliente);

	      if (clientes.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }
	      return new ResponseEntity<>(clientes, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }//clientes/nombre2
	  
	  @GetMapping("/clientes/cedula/{cedula}")
	  public ResponseEntity<List<Cliente>> findByCedula(@PathVariable("cedula")Long cedula){
		 try {
			List<Cliente> clientes = clienteRepository.findByCedula(cedula);
			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(clientes,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		} 
	  }
}
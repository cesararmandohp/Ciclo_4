package com.misiontic2022.grupo51.tiendaG2.tienda.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clientes")
public class Cliente {
	
	@Id
	private String id;
	private Long cedula;
	private String nombrecliente;
	private String direccion;
	private String telefono;
	private String emailcliente;
	
	
	public Cliente() {
		
	}


	public Cliente(Long cedula, String nombrecliente, String direccion, String telefono, String emailcliente) {
		super();
		this.cedula = cedula;
		this.nombrecliente = nombrecliente;
		this.direccion = direccion;
		this.telefono = telefono;
		this.emailcliente = emailcliente;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public Long getCedula() {
		return cedula;
	}


	public void setCedula(Long cedula) {
		this.cedula = cedula;
	}


	public String getNombrecliente() {
		return nombrecliente;
	}


	public void setNombrecliente(String nombrecliente) {
		this.nombrecliente = nombrecliente;
	}


	public String getDireccion() {
		return direccion;
	}


	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}


	public String getTelefono() {
		return telefono;
	}


	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public String getEmailcliente() {
		return emailcliente;
	}


	public void setEmailcliente(String emailcliente) {
		this.emailcliente = emailcliente;
	}
	
	

}

package com.prathi.eventmanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prathi.eventmanager.events.Events;
import com.prathi.eventmanager.services.EventsServices;


@RestController
@CrossOrigin()
public class EventControllers {
	@Autowired
	private EventsServices eventServices;
	
	@PostMapping("/")
	public boolean postEvent(@RequestBody Events e)
	{
		return (eventServices.saveEvents(e) != null);
	}
	
	@GetMapping("/getEvents")
	public List<Events> getEvents()
	{
		return eventServices.getEvents();
	}
	@GetMapping("/getEvents/{id}")
	public Events getEventsById(int id)
	{
		return eventServices.getEventsById(id);
	}
	
	@PutMapping("/updateName/{id}/{name}")
	public String updateNameById(@PathVariable String name,@PathVariable int id)
	{
		return eventServices.updateNameById(name, id)+" updated";
	}
	
	@DeleteMapping("deleteById/{id}")
	public String deleteById(@PathVariable int id)
	{
		return eventServices.deleteById(id)+" deleted";
	}
	@PostMapping("/update")  
	private Events update(@RequestBody Events e)   
	{  
		eventServices.update(e);  
		return e;  
	} 
}

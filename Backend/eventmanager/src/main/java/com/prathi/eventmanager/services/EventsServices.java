package com.prathi.eventmanager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prathi.eventmanager.events.Events;
import com.prathi.eventmanager.repository.EventsRepo;

import jakarta.transaction.Transactional;

@Service
public class EventsServices {

	@Autowired
	private EventsRepo eventRepo;
	
	public Events saveEvents(Events e)
	{
		return eventRepo.save(e);
	}
	public List<Events> getEvents()
	{
		return eventRepo.findAll();
	}
	public int updateNameById(String name,int id)
	{
		return eventRepo.updateNameById(name,id);
	}
	public int deleteById(int id)
	{
		return eventRepo.deleteById(id);
	}
	public Events getEventsById(int id)
	{
		return eventRepo.getEventsById(id);
	}
	@Transactional
	public Events update(Events e)   
	{  
		return eventRepo.saveAndFlush(e);  
	} 
	
}

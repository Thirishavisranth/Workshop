package com.prathi.eventmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.prathi.eventmanager.events.Events;

import jakarta.transaction.Transactional;

public interface EventsRepo extends JpaRepository<Events,Integer>{

	@Modifying
	@Transactional
	@Query("update Events e set e.eventName=?1 where e.eventId=?2")
	int updateNameById(String name,int id);
	
	@Query("select e from Events e where e.eventId=?1")
	Events getEventsById(int id);
	
	@Modifying
	@Transactional
	@Query("delete from Events e where e.eventId= :id")
	int deleteById(@Param("id") int id);
}

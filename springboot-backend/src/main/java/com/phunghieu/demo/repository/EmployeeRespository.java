package com.phunghieu.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.phunghieu.demo.model.Employee;

@Repository
public interface EmployeeRespository extends JpaRepository<Employee, Long>{

}

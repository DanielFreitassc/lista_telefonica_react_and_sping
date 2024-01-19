package br.com.lab.lista_telefonica.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.lab.lista_telefonica.models.NumerosEntity;

@Repository
public interface NumerosRepository extends JpaRepository<NumerosEntity, Long>{
    
}

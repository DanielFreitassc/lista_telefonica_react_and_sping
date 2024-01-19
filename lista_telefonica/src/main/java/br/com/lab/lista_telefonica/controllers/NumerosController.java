package br.com.lab.lista_telefonica.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import br.com.lab.lista_telefonica.dtos.NumerosDto;
import br.com.lab.lista_telefonica.models.NumerosEntity;
import br.com.lab.lista_telefonica.repositories.NumerosRepository;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import jakarta.validation.Valid;

@RestController
public class NumerosController {
    @Autowired
    NumerosRepository numerosRepository;
    @CrossOrigin(origins = "*", allowedHeaders ="*")
    @PostMapping("/lista")
    public ResponseEntity <NumerosEntity> salvarNumeros(@RequestBody @Valid NumerosDto numerosDto){
        var numerosEntity = new NumerosEntity();
        BeanUtils.copyProperties(numerosDto, numerosEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(numerosRepository.save(numerosEntity));
    }

    @CrossOrigin(origins = "*", allowedHeaders ="*")
    @GetMapping("/lista")
    public ResponseEntity <List<NumerosEntity>> getAllNumerosEntity(){
        List<NumerosEntity> numerosList = numerosRepository.findAll();
        if (!numerosList.isEmpty()) {
            for (NumerosEntity numero : numerosList) {
                Long id = numero.getId();
                numero.add(linkTo(NumerosController.class).slash(id).withSelfRel());
            }
        }
        return ResponseEntity.ok(numerosList);
        
    }
    @CrossOrigin(origins = "*", allowedHeaders ="*")
    @DeleteMapping("/lista/{id}")
    public ResponseEntity<Object> deletarNumerosEntity(@PathVariable(value = "id") Long id){
        Optional<NumerosEntity> numeroOne = numerosRepository.findById(id);
        if (numeroOne.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Número não econtrado");
        }
        numerosRepository.delete(numeroOne.get());
        return ResponseEntity.status(HttpStatus.OK).body("Número deletado com sucesso");
    } 
}

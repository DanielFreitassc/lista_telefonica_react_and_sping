package br.com.lab.lista_telefonica.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record NumerosDto (@NotBlank String nome_pessoa, @NotNull String numero_pessoa,String observacao){
    
}

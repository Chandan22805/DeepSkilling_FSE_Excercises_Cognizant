package com.cognizant.springlearn.model;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Country {

    @NotBlank(message = "Country code cannot be blank")
    private String code;

    @NotBlank(message = "Country name cannot be blank")
    private String name;
}
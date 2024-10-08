package com.niantic.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomRecipe {
    @JsonProperty("id")
    private int custom_id;
    private int user_id;
    private String title;
    private String image;
    private String instructions;
    private String ingredients;
}

package com.stackroute.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "seller")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Seller {

    @Id
    private String sellerEmail;
    private String sellerName;
    private long sellerPhone;
    private String sellerAddress;
    private String sellerGstIn;
    private double sellerRating;
    private String password;
    private String role="seller";
    private List<Product> sellerProducts;
    private static final LocalDateTime timestamp= LocalDateTime.now();
}

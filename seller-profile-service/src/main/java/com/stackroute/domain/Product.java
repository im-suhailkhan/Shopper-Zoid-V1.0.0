package com.stackroute.domain;

import lombok.*;

import java.math.BigDecimal;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    private String productId;
    private String productName;
    private String productImg;
    private BigDecimal productPrice;
    private long productQuantity;
    private String productDesc;
}

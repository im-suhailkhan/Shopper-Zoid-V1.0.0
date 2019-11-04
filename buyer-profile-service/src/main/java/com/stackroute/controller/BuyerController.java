package com.stackroute.controller;

import com.stackroute.domain.Buyer;
import com.stackroute.exceptions.BuyerAlreadyExistException;
import com.stackroute.exceptions.BuyerNotFoundException;
import com.stackroute.exceptions.DatabaseConnectivityFailedException;
import com.stackroute.kafka.BuyerDto;
import com.stackroute.kafka.BuyerRecomDto;
import com.stackroute.service.BuyerService;
import com.stackroute.service.Producer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping(value = "api/v1/")
@CrossOrigin(value = "*")
public class BuyerController {

        private BuyerService buyerService;
        private Producer producer;

        private static ResponseEntity responseEntity;


        @Autowired
        public BuyerController(BuyerService buyerService, Producer producer) {
            this.buyerService = buyerService;
            this.producer = producer;
        }

    /**
     * Routing of save buyer method and setting field of BuyerDto via Buyer class
     */
        @PostMapping("buyer")
        public ResponseEntity<?> saveBuyer(@RequestBody Buyer buyer) throws DatabaseConnectivityFailedException, BuyerAlreadyExistException, Exception{
            Buyer savedBuyer = buyerService.saveBuyer(buyer);
            BuyerDto buyerDto=new BuyerDto();
            buyerDto.setBuyerEmail(buyer.getBuyerEmail());
            buyerDto.setBuyerName(buyer.getBuyerName());
            buyerDto.setBuyerPhone(buyer.getBuyerPhone());
            buyerDto.setPassword(buyer.getPassword());

            BuyerRecomDto buyerRecomDto=new BuyerRecomDto();
            buyerRecomDto.setBuyerEmail(buyer.getBuyerEmail());
            buyerRecomDto.setBuyerDob(buyer.getBuyerDob());
            buyerRecomDto.setBuyerGender(buyer.getBuyerGender());
            buyerRecomDto.setBuyerHomeAddress(buyer.getBuyerHomeAddress());
            buyerRecomDto.setBuyerName(buyer.getBuyerName());
            buyerRecomDto.setBuyerImage(buyer.getBuyerImage());
            buyerRecomDto.setBuyerPhone(buyer.getBuyerPhone());
            buyerRecomDto.setSellerRating(buyer.getBuyerRating());
            buyerRecomDto.setBuyerOfficeAddress(buyer.getBuyerOfficeAddress());

            responseEntity = new ResponseEntity<Buyer>(savedBuyer, HttpStatus.CREATED);
            this.producer.sendMessageBuyerDto(buyerDto);
            this.producer.sendMessageBuyerRecomDto(buyerRecomDto);
            return responseEntity;
        }

    /**
     * Routing of get request to get all buyer method
     */

        @GetMapping("buyers")
        public ResponseEntity<?> getAllBuyer() throws DatabaseConnectivityFailedException, Exception{
            List<Buyer> allBuyer =buyerService.getAllBuyer();
            responseEntity = new ResponseEntity<List<Buyer>>(buyerService.getAllBuyer(),HttpStatus.OK);
            return responseEntity;
        }

    /**
     * Routing of get request to get buyer via id
     */

        @GetMapping("buyer/{buyerEmail}")
        public ResponseEntity<?> getBuyerById(@PathVariable String buyerEmail) throws DatabaseConnectivityFailedException, BuyerNotFoundException, Exception{
            responseEntity = new ResponseEntity<Buyer>(buyerService.getBuyerById(buyerEmail),HttpStatus.OK);
            return responseEntity;
        }


    /**
     * Routing of delete request to delete buyer via email
     */

        @DeleteMapping("buyer/{buyerEmail}")
        public ResponseEntity<?> deleteBuyerById(@PathVariable String buyerEmail) throws DatabaseConnectivityFailedException, BuyerNotFoundException, Exception{
            responseEntity = new ResponseEntity<Buyer>(buyerService.deleteBuyerById(buyerEmail),HttpStatus.OK);
            return responseEntity;
        }

    /**
     * Routing of delete request to delete buyers
     */

        @DeleteMapping("buyers")
        public ResponseEntity<?> deleteAllBuyer() throws DatabaseConnectivityFailedException, Exception{
            responseEntity = new ResponseEntity<>(buyerService.deleteAllBuyer(),HttpStatus.OK);
            return responseEntity;
        }

    /**
     * Routing of put request to update buyer
     */

        @PutMapping("buyer")
        public ResponseEntity<?> updateBuyer(@RequestBody Buyer buyer) throws DatabaseConnectivityFailedException, BuyerNotFoundException, Exception{
            responseEntity = new ResponseEntity<Buyer>(buyerService.updateBuyer(buyer),HttpStatus.OK);
            return responseEntity;
        }

    /**
     * Routing of get request to get buyer name
     */

        @GetMapping("buyers/{buyerName}")
        public ResponseEntity<?> getBuyerByName(@PathVariable String buyerName) throws DatabaseConnectivityFailedException, BuyerNotFoundException, Exception{

            responseEntity = new ResponseEntity<List<Buyer>>(buyerService.getBuyerByName(buyerName),HttpStatus.OK);
            return  responseEntity;
        }

    }


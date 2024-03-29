package com.app.ecolapp.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.app.ecolapp.Models.OfferModel;
import com.app.ecolapp.Repositories.IOfferRepository;

import com.app.ecolapp.Models.Response.GenericResponse;

@Service
public class OfferService {

    @Autowired
    IOfferRepository offerRepository;

    public GenericResponse<ArrayList<OfferModel>> getOffers() {
        try {
            var list = (ArrayList<OfferModel>) offerRepository.findAll();
            return new GenericResponse<ArrayList<OfferModel>>(HttpStatus.OK, "OK", true, list);

        } catch (Exception exception) {
            return new GenericResponse<ArrayList<OfferModel>>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }

    }
    public GenericResponse<OfferModel> saveOffer(OfferModel offer) {
        try {
            return new GenericResponse<OfferModel>(HttpStatus.OK, "OK", true, offerRepository.save(offer));

        } catch (Exception exception) {
            return new GenericResponse<OfferModel>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(), false,
                    null);
        }
    }

    public GenericResponse<Optional<OfferModel>> getOfferById(Long id){
        try{
            var list = offerRepository.findById(id);
            return new GenericResponse<Optional<OfferModel>>(HttpStatus.OK,"OK",true,list);

       } catch (Exception exception){
        return new GenericResponse<Optional<OfferModel>>(HttpStatus.INTERNAL_SERVER_ERROR,exception.getMessage(),false,null);
         }
    }
}

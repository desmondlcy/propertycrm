import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUserSuccessToken } from './'
import {
  UTIPAY_COUNTRIES,
  UTIPAY_COUNTRIES_SUCCESS,
  UTIPAY_COUNTRIES_FAIL,
  UTIPAY_COUNTRY_UPDATE,
  UTIPAY_COUNTRY_CREATE_SUCCESS,
  UTIPAY_COUNTRIES_LOADING,
  UTIPAY_COUNTRY_INITIAL_STATE
} from './types';

export const countryUpdate = ({ prop, value }) => {
  return {
    type: UTIPAY_COUNTRY_UPDATE,
    payload: { prop, value }
  };
};

export const retrieveUtipayCountries = ( token ) => {

      return(dispatch) => {
          dispatch({ type: UTIPAY_COUNTRIES });
          dispatch( { type: UTIPAY_COUNTRY_INITIAL_STATE } );
            axios({
              method: 'GET',
              url: 'https://mtse-utipayapi.herokuapp.com/countries',
              headers: {
                  Authorization: 'Bearer ' + token
              }
            })
          .then(countries => {
            var test = {};
            test = countries.headers
            var page  = test['x-pagination-page-count'];
            retrieveUtipayCountriesSuccess(dispatch, countries.data);
          })
          .catch(error =>
            {
              retrieveUtipayCountriesFail(dispatch, error.message);
            }
            );
    };
};

export const retrieveUtipayCountriesSingle = ( token , id ) => {

      return(dispatch) => {
          dispatch({ type: UTIPAY_COUNTRIES });
            axios({
              method: 'GET',
              url: 'https://mtse-utipayapi.herokuapp.com/countries/'+id ,
              headers: {
                  Authorization: 'Bearer ' + token
              }
            })
          .then(countries => {
            _.each(countries.data, (value,prop) => {
              dispatch({
                type: UTIPAY_COUNTRY_UPDATE,
                payload: { value , prop }
              });
            });
          })
          .catch(error =>
            {
              retrieveUtipayCountriesFail(dispatch, error.message);
            }
            );
    };
};

export const updateUtipayCountries = ( token , countries ) => {
      var data = countries[0];
      return(dispatch) => {
          dispatch({ type: UTIPAY_COUNTRIES_LOADING });
            axios({
              method: 'PUT',
              url: 'https://mtse-utipayapi.herokuapp.com/countries/'+data.id,
              headers: {
                  Authorization: 'Bearer ' + token
              },
              data
            })
          .then(countries => {
            updateUtipayCountriesSuccess(dispatch);
          })
          .catch(error =>
            {
              retrieveUtipayCountriesFail(dispatch, error.message);
            }
            );
    };
};

export const deleteUtipayCountries = ( token ,id ) => {
      return(dispatch) => {
          dispatch({ type: UTIPAY_COUNTRIES_LOADING });
            axios({
              method: 'DELETE',
              url: 'https://mtse-utipayapi.herokuapp.com/countries/'+id,
              headers: {
                  Authorization: 'Bearer ' + token
              }
            })
          .then(countries => {
            updateUtipayCountriesSuccess(dispatch);
          })
          .catch(error =>
            {
              retrieveUtipayCountriesFail(dispatch, error.message);
            }
            );
    };
};

export const createUtipayCountries = ( token , countries ) => {
      var data = countries[0];
      return(dispatch) => {
          dispatch({ type: UTIPAY_COUNTRIES_LOADING });
            axios({
              method: 'POST',
              url: 'https://mtse-utipayapi.herokuapp.com/countries',
              headers: {
                  Authorization: 'Bearer ' + token
              },
              data
            })
          .then(countries => {
            updateUtipayCountriesSuccess(dispatch);
          })
          .catch(error =>
            {
              retrieveUtipayCountriesFail(dispatch, error.message);
            }
            );
    };
};

export const retrieveUtipayCountriesSuccess = (dispatch, countries ) => {
  dispatch( {
    type: UTIPAY_COUNTRIES_SUCCESS,
    payload: countries
  });
};

export const updateUtipayCountriesSuccess = (dispatch) => {
  dispatch( { type: UTIPAY_COUNTRY_CREATE_SUCCESS });
  dispatch( { type: UTIPAY_COUNTRY_INITIAL_STATE } );
  Actions.main({ type: 'reset' });
};

export const resetCountries = () => {
  return (dispatch) =>{
          dispatch({ type:UTIPAY_COUNTRY_CREATE_SUCCESS })
      }
};


const retrieveUtipayCountriesFail = (dispatch, error) => {
  dispatch({
    type: UTIPAY_COUNTRIES_FAIL,
    message: error
  });
};

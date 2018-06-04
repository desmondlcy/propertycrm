import firebase from 'firebase';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_SUCCESS_TOKEN,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) =>  {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) =>  {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({email , password}) => {
    return(dispatch) => {
      dispatch({ type: LOGIN_USER });
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch,user))
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch,user))
          .catch(error =>loginUserFail(dispatch, error.message));
      });
    };
};

const loginUserSuccess = (dispatch , user ) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    message: error
  });
};

export const loginUserToken = ( {email , password}) => {
      return(dispatch) => {
          dispatch({ type: LOGIN_USER });
          axios({
            method: 'POST',
            url: 'https://mtse-utipayapi.herokuapp.com/oauth2/rest/token',
            header: {
                'content-type' :"application/x-www-form-urlencoded"
            },
            data: {
              grant_type:'password',
              username:email,
              password:password,
              client_id:'testclient',
              client_secret:'testpass'
            }
          })
          .then(userToken => {
            loginUserSuccessToken(dispatch,userToken.data.access_token);
          })
          .catch(error =>
            {
              console.log('error');
              console.log(error);
              loginUserFail(dispatch, error.message);
            }
            );
    };
};

const loginUserSuccessToken = (dispatch , userToken ) => {
  dispatch({
    type: LOGIN_USER_SUCCESS_TOKEN,
    payload: userToken
  });

  Actions.main();
};

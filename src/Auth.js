import React from 'react';

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    	Auth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    Auth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  back(){
  	return this.isAuthenticated;
  }
};

export default Auth;
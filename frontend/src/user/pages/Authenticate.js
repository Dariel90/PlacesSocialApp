import React, { useState, useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import './Authenticate.css';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import {AuthContext} from '../../shared/context/auth-context'

const Authenticate = () => {
  const auth = useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    true
  );

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    auth.login()
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id="username"
            element="input"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          ></Input>
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL, VALIDATOR_MINLENGTH(20)]}
          errorText="Please enter a valid email address."
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters"
        />
        <Button type="submit" disabled={!formState.isValid}>
          {!isLoginMode ? 'SINGUP' : 'LOGIN'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Authenticate;

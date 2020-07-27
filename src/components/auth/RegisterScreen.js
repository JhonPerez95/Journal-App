import React from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';
import { useDispatch, useSelector } from 'react-redux';

import useForm from '../../hook/useForm';
import { actRemoveError, actAlertError } from '../../redux/actions/uiAction';
import { startEmailRegister } from '../../redux/actions/authActions';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  // const { msgError } = useSelector((state) => state.ui);

  const [formValue, handleInputChange] = useForm({
    name: 'Jainer',
    email: 'jainer@gmail.com',
    password: '123456',
    password2: '123456',
  });
  const { name, email, password, password2 } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startEmailRegister(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(actAlertError('Name is required'));
      return false;
    } else if (!isEmail(email)) {
      dispatch(actAlertError('Email is not valid'));
      return false;
    } else if (password !== password2 || password.length <= 5) {
      dispatch(actAlertError('Password is not valid'));
      return false;
    }
    dispatch(actRemoveError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Registrer</h3>
      {/* {msgError && <div className="auth__alert-error">{msgError}</div>} */}
      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;

import React, {useState} from 'react';
import RegisterComponent from '../../components/SignUp/index';
import envs from '../../config/env'

let Register = () => {
  let [form, setForm] = useState({});
  let [errors, setErrors] = useState({});
  let {BACKEND_URL} = envs

  console.log('BACKEND URL >>', envs);
  console.log('__DEV__ >>', __DEV__ );

  let onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if ( value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 6 characters'}
          })
        } else {
          setErrors((prev) => {
            return {...prev, [name]: null}
          })
        }
      } else {
        setErrors((prev) => {
          return {...prev, [name]: null}
        })
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'}
      })
    }

  };

  let onSubmit = () => {
    console.log('form >> ',form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'}
      })
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a firstname'}
      })
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a lastname'}
      })
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'}
      })
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'}
      })
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default Register;

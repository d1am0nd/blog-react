import * as React from 'react';
import {login, ICreds} from '../../api/user';
import {login as authLogin} from '../../misc/auth';
import SmallText from '../Simple/SmallText';
import Submit from '../Simple/Submit';

const Login = () => {
  const [creds, setCreds] = React.useState<ICreds>({
    email: '',
    password: '',
  });

  return (
    <>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const {data: user, headers} = await login(creds);
        const token = headers.authorization.replace('Bearer ', '');
        authLogin(user, token);
      }}>
        <SmallText
          key='email-input'
          handleChange={({currentTarget}) => setCreds({
            ...creds,
            email: currentTarget.value,
          })}
          label='Email' />
        <SmallText
          key='password-input'
          type='password'
          handleChange={({currentTarget}) => setCreds({
            ...creds,
            password: currentTarget.value,
          })}
          label='Password' />
        <Submit>Submit</Submit>
      </form>
    </>
  );
};

export default Login;

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    const form = e.target;

    dispatch(
      logIn({        
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

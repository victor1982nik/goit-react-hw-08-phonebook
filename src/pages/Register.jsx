import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventdefault();
    debugger;
    const { name, email, password } = e.target.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

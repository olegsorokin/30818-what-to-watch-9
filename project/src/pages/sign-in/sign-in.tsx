import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import { AppRoute } from '../../constants/routs';

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleFieldChangeEvent = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name: title, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [title]: value,
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const { email, password } = formData;
    dispatch(login({ email, password }))
      .then(() => {
        navigate(AppRoute.Main);
      });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleFormSubmit} action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                value={formData.email}
                onChange={handleFieldChangeEvent}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                value={formData.password}
                onChange={handleFieldChangeEvent}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export { SignIn };

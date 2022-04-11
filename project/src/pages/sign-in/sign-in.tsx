import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import { AppRoute } from '../../constants/routs';
import clsx from 'clsx';

function SignIn(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
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

  const isFormDataValid = () => emailRef.current?.validity.valid && passwordRef.current?.validity.valid;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form onSubmit={handleFormSubmit} action="#" className="sign-in__form">
          {
            !isFormDataValid() &&
              <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>
          }
          <div className="sign-in__fields">
            <div className={clsx('sign-in__fields', { 'sign-in__field--error': !emailRef.current?.validity.valid })}>
              <input
                ref={emailRef}
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
            <div className={clsx('sign-in__fields', { 'sign-in__field--error': !passwordRef.current?.validity.valid })}>
              <input
                ref={passwordRef}
                value={formData.password}
                onChange={handleFieldChangeEvent}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                pattern="(?=.*\d)(?=.*[a-z]).{2,}"
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

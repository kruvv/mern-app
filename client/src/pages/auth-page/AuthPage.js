import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hooks';
import './AuthStyles.css';

export const AuthPage = () => {

  const {loading, error, request} = useHttp();

  const [form, setForm] = useState({
      email:"",
      password:""
  });

  useEffect(() => {

  }, [error]);

  /**
   * changeHandler - обрабатывает поля формы в зависимости от поля name.
   *
   * @param {*} e
   */
  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});

    } catch (error) {
      // Обработчик не нужен, обработка уже есть в хуке useHttp.
    }
  }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи Ссылку</h1>
                <div className="card blue darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Авторизация</span>
                  <div>
                   <div className="input-field">
                    <input
                          placeholder="Введите email"
                          id="email"
                          type="text"
                          name="email"
                          className="yellow-input"
                          onChange={changeHandler}
                    />
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div className="input-field">
                  <input
                        placeholder="Введите пароль"
                        id="password"
                        type="password"
                        name="password"
                        className="yellow-input"
                        onChange={changeHandler}
                  />
                  <label htmlFor="password">Пароль:</label>
                </div>
                  </div>
                </div>
                <div className="card-action">
                  <button
                    className="btn yellow darken-4"
                    disabled={loading}
                  >
                    Войти
                  </button>
                  <button
                    className="btn grey lighten-1 black-text"
                    onClick={registerHandler}
                    disabled={loading}
                  >
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
}

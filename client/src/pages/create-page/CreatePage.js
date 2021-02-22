import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';
import { useHistory } from 'react-router-dom';
import './create-page.styles.css';

export const CreatePage = () => {

    const history = useHistory();

    const auth = useContext(AuthContext);

    const {request} = useHttp();

    const [link, setLink] = useState('');

    const handleValue = (e) => {
        setLink(e.target.value);
    }

    /**
     * Делает поля формы активными
     */
    useEffect(() => {
        window.M.updateTextFields();
      }, []);


    const pressHandler = async (e) => {
        if (e.key === "Enter") {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                });
                history.push(`/detail/${data.link._id}`);
            } catch (error) {

            }
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2 block">
                <div className="input-field">
                    <input
                      placeholder="Вставьте ссылку"
                      id="link"
                      type="text"
                      value={link}
                      onChange={handleValue}
                      onKeyPress={pressHandler}
                    />
                <label htmlFor="link">Введите ссылку</label>
              </div>
            </div>
        </div>
    )
}

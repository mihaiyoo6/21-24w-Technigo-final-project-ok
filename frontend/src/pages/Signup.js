import React from 'react'

const Signup = () => {
  return (
    <div>
      Signup
    </div>
  )
}

export default Signup





/* import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { API_URL } from '../reusable/urls'

import user from "../reducers/user";

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const accessToken = useSelector((store) => store.user.accessToken);
    const errorMessage = useSelector(store => store.user.errors);
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (accessToken) {
          history.push("/");
        }
      }, [accessToken, history]);
    
      const onFormSubmit = (e) => {
        e.preventDefault()
    
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        }
    
        fetch(API_URL('signup'), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            batch(() => {
              dispatch(user.actions.setUsername(data.username));
              dispatch(user.actions.setAccessToken(data.accessToken));
              dispatch(user.actions.setErrors(null));
            });
          } else {
            dispatch(user.actions.setErrors(data));
          }
        })
        .catch();
      }

    return (
        
       
            <form onSubmit={onFormSubmit}>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Sign up</button>
            {errorMessage ? <p>{error.Message.message}</p> : ''} 
            </form>
          )
        }
 
export default Signup */
 
import React from 'react';
import axios from 'axios';
export default class BackEndService
{
    public static sendRequest(url: string)
    {
        console.log('here');
        axios.post(
                'http://localhost:8080/login',
            {"password": 123,
            "user": 101},
            ).then( () => {
                console.log('response recieved')
        }).catch( (error) => {
            console.log(error)
        });
    }
}
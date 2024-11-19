
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'


export default function AuthLayout ({children,authentication = true}) {

    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.isLoggedIn)
    console.log("authStatus",authStatus,authentication);
    
    useEffect(()=> {
        if(authStatus !== authentication){
            navigate('/')
        }
    },[authStatus, navigate, authentication])

  return <>{children}</>

}

import React from 'react'
import {useApi} from '../api/api.js'

const seedData = async() => {
    const {handleGetRequest} = useApi()

    const responseAuth = handleGetRequest("seed/generated-credentials")
    const responseEcommerce = handleGetRequest("seed/ecommerce")

    
}

export default seedData

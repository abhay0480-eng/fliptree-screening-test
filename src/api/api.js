import axios from "axios";
const baseUrl = "https://api.freeapi.app/api/v1";
const config = {
    headers: {
        'Accept': 'application/json', // Accept header
        'Content-Type': 'application/json', // Content-Type header
    },
};

export const useApi = () => {

  const handlePostRequest = async (url, payload) => {
        try {
            const response = await axios.post(`${baseUrl}/${url}`, payload, config);
            console.log("response",response?.data);
            
            return response?.data
        }catch(error){
            return error
        }
    }

  const handleGetRequest = async (url) => {
   
    try {
      const request = await axios.get(`${baseUrl}/${url}`, config);
      const response = await request.json()
            console.log("response",response);
    }catch(error){

    }
     
  };

  return {
    handlePostRequest,
    handleGetRequest,
  };
};

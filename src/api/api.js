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
            
            
            return response?.data
        }catch(error){
            return error
        }
    }

  const handleGetRequest = async (url) => {
   
    try {
      const response = await axios.get(`${baseUrl}/${url}`, config);
       return response?.data
    }catch(error){
      console.log("error",error);

    }
     
  };

  return {
    handlePostRequest,
    handleGetRequest,
  };
};

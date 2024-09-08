import axios from 'axios';


export const fetchBlogs = async ()=>{
    try {
        const response = await axios.get('https://localhost:3000/api/data');
        return response.data;
    } catch (error) {
        console.log("Error in api.jsx: ",error)
    }
}
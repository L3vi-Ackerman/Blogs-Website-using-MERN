import React, {createContext, useState, useEffect} from 'react';
import {fetchBlogs} from '../Services/blogServices';

export const BlogContext = createContext();

export const BlogProvider = ({children}) =>{
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const loadBlogs = async()=>{
            try {
               const data = await fetchBlogs() ;
               setBlogs(data);
               setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        loadBlogs();
    },[])

    return (
        <BlogContext.Provider value={{blogs,loading, error}}>
            {children}
        </BlogContext.Provider>
    )
}
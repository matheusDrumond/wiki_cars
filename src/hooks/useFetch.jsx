// React hooks
import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () =>{
            // Loading
            // Inicia o carregamento
            setLoading(true);
            
            try {
            const res = await fetch(url);

            const json = await res.json()
            
            setData(json)
            } catch (error) {
                console.log(error.message)

                setError(error)
            }

            // Finaliza o Carregamento
            setLoading(false);
        }

        fetchData();
    }, [url])

    return { data, loading, error }

}
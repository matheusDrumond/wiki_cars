// React hooks
import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () =>{
            // Loading
            // Inicia o carregamento
            setLoading(true);
            
            try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'OQrhwmD8MAAetKoAzR+lhA==PelUFqyYbP7gQED5'
                }
            });

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
// React hooks

import { useState } from "react"

export const useFetch = (url, model) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        const res = await fetch(url + model, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'X-Api-Key': 'OQrhwmD8MAAetKoAzR+lhA==PelUFqyYbP7gQED5'
            }
        })

        const json = await res.json();

        setData(json);
        setLoading(false);
    }

    return { data }

}
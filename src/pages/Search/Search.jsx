// Styles
import './Search.css'

// React Router
import { useSearchParams } from 'react-router-dom'

// Hooks
import { useFetch } from '../../hooks/useFetch';

const Search = () => {

    const [searchParams] = useSearchParams();

    const url = 'https://api.api-ninjas.com/v1/cars?limit=10&model=' + searchParams 

    const {data: items, loading, error} = useFetch(url)
        

  return (
    <div>
        <h1>See all matching cars</h1>
        {loading && <h2>Loading data</h2>}
        {error && <h2>Ops, an error occurred, try again</h2>}
        {items && (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <h2>{item.model}</h2>
                        <span>{item.make}</span>
                        <a href='#'>More information</a>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Search
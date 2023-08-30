// Styles
import './Search.css'

// React Router
import { Link, useSearchParams } from 'react-router-dom'

// Hooks
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi';

const Search = ({ getCarsInfo }) => {

    // Identifies the model the user is looking for
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || ''

    // Filtering by year
    const [year, setYear] = useState('')
    const [getYear, setGetYear] = useState('');
    //Getting the filter value
    const [activeFilter, setActiveFilter] = useState(false)    

    // Request URL
    const url = 'https://api.api-ninjas.com/v1/cars?limit=50&model=' + searchTerm + '&year=' + year

    // Getting data using the custom hook
    const {data: items, loading, error} = useFetch(url)

    // Ordering from newer to older
    const orderedItems = items?.sort((a, b) => b.year - a.year)

    // Send the array to the info pages

    useEffect(() => {
        getCarsInfo(orderedItems)
    }, [orderedItems])

    const handleSubmit = (e) => {
        e.preventDefault();

        setYear(getYear)
    }

    useEffect(() => {
        if(!activeFilter) {
            setYear('')
            setGetYear('')
        }
    }, [activeFilter])
        
  return (
    <div className='search-container'>
        <div className='search-header'>
            <h1>See all cars that match <span className='matching-car'>{(searchTerm.toLocaleUpperCase())}</span></h1>
            <form onSubmit={handleSubmit}>
                {activeFilter && (
                    <>
                        <input 
                        type="number"
                        value={getYear}
                        onChange={(e) => setGetYear(e.target.value)}
                        className='filter-input'
                        /> 
                        <button type='submit' className='filter-btn'><HiSearch /></button>
                    </>)
                }
                <label>
                    filter by year
                    <input 
                    type='checkbox' 
                    checked={activeFilter} 
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.checked)}
                    />
                </label>
            </form>
        </div>
        {loading && <h2 className='loading-message'>Loading data...</h2>}
        {error && <h2 className='error-message'>Ops, an error occurred, try again</h2>}
        {orderedItems && (!loading && !error) && (
            <ul className='result-list'>
                {orderedItems.map((item, index) => (
                    <li key={index}>
                        <h2 className='car-name'>{item.model}</h2>
                        <span className='car-brand'>{item.make}</span>
                        <span>{item.year}</span>
                        <Link 
                        to={`/info/${index}`} 
                        >
                            See more
                        </Link>
                    </li>
                ))}
            </ul>
        )}
        {(items && items.length == 0  && !loading && !error) && <p>No results found :(</p>}
    </div>
  )
}

export default Search
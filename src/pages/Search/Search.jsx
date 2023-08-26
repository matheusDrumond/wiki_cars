// Styles
import './Search.css'

// React Router
import { useSearchParams } from 'react-router-dom'

// Hooks
import { useFetch } from '../../hooks/useFetch';
import { useRef, useState } from 'react';
import { HiSearch } from 'react-icons/hi';

const Search = () => {

    // Identifies the model the user is looking for
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || ''

    // Filtering by year
    const [year, setYear] = useState('')
    //Getting the filter value
    const filter = useRef()
    const [activeFilter, setActiveFilter] = useState()
    

    // Request URL
    const url = 'https://api.api-ninjas.com/v1/cars?limit=50&model=' + searchTerm + '&year=' + year

    // Getting data using the custom hook
    const {data: items, loading, error} = useFetch(url)

    // Ordering from newer to older
    const orderedItems = items?.sort((a, b) => b.year - a.year)
        
  return (
    <div className='search-container'>
        <div>
            <h1>See all matching cars</h1>
            <form>
                <label>
                    filter by year
                    <input type='checkbox' ref={filter} checked={activeFilter} onChange={(e) => setActiveFilter(e.target.checked)}/>
                </label>
                {activeFilter && (
                    <>
                        <input 
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        /> 
                    </>)
                }
            </form>
        </div>
        {loading && <h2 className='loading-message'>Loading data <span className='loader'></span></h2>}
        {error && <h2 className='error-message'>Ops, an error occurred, try again</h2>}
        {orderedItems && (!loading && !error) && (
            <ul className='result-list'>
                {orderedItems.map((item, index) => (
                    <li key={index}>
                        <h2 className='car-name'>{item.model}</h2>
                        <span className='car-brand'>{item.make}</span>
                        <span>{item.year}</span>
                        <a href='#'>More information</a>
                    </li>
                ))}
            </ul>
        )}
        {(items && items.length == 0  && !loading && !error) && <p>No results found :(</p>}
    </div>
  )
}

export default Search
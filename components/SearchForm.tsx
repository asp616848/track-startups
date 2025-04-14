import React from 'react'
import Form from 'next/form'
import SearchFormReset from '../components/SearchFormReset'
import { SearchIcon } from 'lucide-react'

const SearchForm = ({query}:{ query?:string}) => {    

    return (
        <Form action="/" scroll={false} className='search-form' >
            <input 
                name="query"
                defaultValue={""} 
                placeholder='Search Startups' 
                className='search-input'>
            </input>
        
                {query && (
                    <SearchFormReset/>
                )}
                <button type='submit' className= 'search-btn' >
                    <SearchIcon  className='size-5'/>
                </button>
        </Form>

    )
}

export default SearchForm

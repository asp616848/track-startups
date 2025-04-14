"use client"
import { X } from "lucide-react";
import Link from "next/link"


const SearchFormReset = () => {
    const reset =() =>{
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if(form) form.reset(); 
    }
    return (
        <button type="reset" onClick={reset}
        className="search-btn border-2 border-red-500 text-white">
            <Link href='/' className="search-btn ">
                <X className="size-5"/>
            </Link>
        </button>
    )
}

export default SearchFormReset
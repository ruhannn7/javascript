import React, { use, useState } from 'react'

function Search() {
    const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
        const getData = () => {
            console.log("data has been fetched")
        }
        const interval= setTimeout(() => {
            getData()
        }, 500)
        return () => {
            clearTimeout(interval)
        }
    }, [searchTerm])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} />
        </div>
    )
}
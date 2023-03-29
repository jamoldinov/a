import { useState, useEffect} from "react"

const useFetch = (url, category = null) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const fetchApi = async () =>{
        try {
            const req = await fetch (url)
            if(!req.ok) {
                throw new Error(req.statusText)
            }
            const data = await req.json()
            if(category){
                filterData(category, data.menu)
            } else {
                setData(data.menu) 

            }
            console.log(data.menu);
        }catch (err) {
            console.log(err.massage);
        }
    }

    function filterData (category, items) {
       const filteredData = items.filter((item) => {
            return item.category === category
        })
        setData(filteredData)
    }
    useEffect (() => {
        fetchApi()
        
    }, [url, category])

    return{data, isPending, error}
}
export default useFetch
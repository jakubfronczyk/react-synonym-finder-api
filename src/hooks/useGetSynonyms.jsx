import { useState } from "react"
import {fetchSynonym} from '../api/fetchSynonyms'

export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState([])
    const [isLoading, setIsLoading] = useState()

    const getSynonyms = (word) => {
        setIsLoading(true)
        fetchSynonym(word)
            .then(setSynonyms)
            .then(()=>setIsLoading(false))
    }

    return [isLoading, synonyms, getSynonyms]
}
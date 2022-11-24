import { useState } from 'react'
import './App.css'
import { useGetSynonyms } from './hooks/useGetSynonyms'

function App() {
  const [word, setWord] = useState("")
  const [isLoading, synonyms, getSynonyms] = useGetSynonyms()
  


  const handleFetchSynonyms = (e) => {
    e.preventDefault()
    getSynonyms(word)
  }

  const handleSynonymClicked = (newWord) => {
    setWord(newWord)
    getSynonyms(newWord)
  }



  return (
    <div className="App">
      <h1>Synonym finder using Datamuse API</h1>
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your word</label>
        <input 
          value={word}
          onChange={(e)=>setWord(e.target.value)}
          id="word-input" 
        />
        <button>Submit</button>
      </form>
      {isLoading ? (<div className="load">Loading....</div>
      ) : (
      <ul>
        {synonyms.map(synonym =>
          <li 
            key={synonym.word}
            onClick={() => handleSynonymClicked(synonym.word)}
          >
            {synonym.word}
          </li>
          )}
      </ul>)}
    </div>
  )
}

export default App

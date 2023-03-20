import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [selectedResource, setSelectedResource] = useState('people')
  const [selectedId, setSelectedId] = useState('1')
  const navigate = useNavigate()
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${selectedResource}/${selectedId}`)
  }



  return (
    <div style={{ width: '80', margin: '0 auto'}}>
      <header>
        <nav className="text-center">
          <form onSubmit={(e) =>{
            handleSubmit(e);
          }}>
            <span>Search for: </span>
            <select onChange={(e) => {
              setSelectedResource(e.target.value);
            }}
            value={selectedResource} >
              <option value="people">People</option>
              <option value="planets">Planet</option>
            </select>
            <span> ID: </span>
            <input onChange={(e) => {
              setSelectedId(e.target.value)
            }} type="text" style={{width: '50px'}}
            value={selectedId}/>
            <button style={{margin: '5px'}}>Submit</button>
          </form>
        </nav>
      </header>
      </div>
      )
}
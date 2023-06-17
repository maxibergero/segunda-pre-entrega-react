import React, {useState,useEffect} from 'react'
import CardUser from '../CardUser/CardUser';
import './ItemListContainer.css'

import {Link} from 'react-router-dom'

console.log(process.env.REACT_APP_BASE_URL);


const ItemListContainer = () => {
    const[chars,setChars] = useState([]);
    useEffect(() => {
      /* fetch("")
        .then((response) => response.json())
        .then((json) => setChars(json.results));*/
        fetch('https://fakestoreapi.com/products')
            .then((response)=>response.json())
            .then(json=>setChars(json))

        
    },[])
  return (
    <div className='CardStyle'>
        
        {chars.map((char) => {
            return(
                <div className='card' key={char.id}>
                  <Link to={`detail/${char.id}`}>
                    <CardUser char={char} />
                  </Link>

                </div>
            )
        })}
    </div>
  )
}

export default ItemListContainer
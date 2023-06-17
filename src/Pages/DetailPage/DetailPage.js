import {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom';

import CardUser from '../../component/CardUser/CardUser';



const DetailPage = () => {
  const [char,setChar] = useState({});

  let { id } = useParams();
  console.log(char);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>response.json())
    .then(json=>setChar(json))
  },[id])
  return <div style={{display:'flex', justifyContent:'center', margin:'40px'}}>{char.id ? <CardUser char={char}/> : null }</div>;
  
};

export default DetailPage
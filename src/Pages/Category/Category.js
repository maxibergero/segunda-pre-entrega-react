
import './Category.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../component/CardUser/CardUser";


const Category = () => {
  const [chars, setChars] = useState([]);

  let { categoryId } = useParams();

  console.log("categoryId", categoryId);
  console.log("chars", chars);

  let filteredCharacters = chars.filter((char) => {
    return char.category === categoryId;
  });

  console.log("filteredCharacters", filteredCharacters);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then(json=>setChars(json));
  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          
          <div className='estilos' key={char.id}>
            <CardUser char={char} />
          </div>
          
        );
      })}
    </div>
  );
};

export default Category;


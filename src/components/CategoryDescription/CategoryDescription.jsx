import { Link, useParams } from "react-router-dom";


export const CategoryDescription = () => {

  const {categoryName} = useParams();


  return (
  <div>
    <Link to={'/category'}>Назад</Link>
    <h1>Category: {categoryName}</h1>
  </div>
  )
}

export default CategoryDescription;
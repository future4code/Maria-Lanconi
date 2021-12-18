import { useParams } from 'react-router-dom';
import { Details } from '../../Constants/EndPoints';
import RecipeDetailCard from './RecipeDetailCard';
import Header from '../../Components/Header';
import * as Styled from '../../StyledComponents/StyledComponents'

function RecipeDetail() {

  const Detail = () => {
    const { id } = useParams()
    const recipe = Details(id)


    return <div>
      {recipe.map(recipe => {
        return <RecipeDetailCard
          img = {recipe.image}
          user = {recipe.userName}
          date = {recipe.createdAt}
          title = {recipe.title}
          description = {recipe.description}
        />
         
      })}
    </div>


  }

  return (
    <Styled.GeneralDisplay>
      <Header/>

      <Styled.RecipeDisplay>
        {Detail()}
      </Styled.RecipeDisplay>
    </Styled.GeneralDisplay>
  );
}

export default RecipeDetail;

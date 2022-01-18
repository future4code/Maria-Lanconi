import { useHistory } from 'react-router-dom';
import { FeedRecipes } from '../../Constants/EndPoints';
import Header from '../../Components/Header'
import RecipeCard from './RecipeCard';
import * as Styled from '../../StyledComponents/StyledComponents'


function RecipesList() {
 
  const history = useHistory()

  const goToRecipeDetail = (id) => {
    history.push(`/recipeDetail/${id}`)
  }

  const feed = () => {
    const feedItem = FeedRecipes()

    return (
      <Styled.FeedDisplay>
        {feedItem.map((item) => {
          return <RecipeCard
              img = {item.image}
              changePage = {goToRecipeDetail}
              id = {item.recipe_id}
              title = {item.title}
            />
          })}
      </Styled.FeedDisplay>
    )
  }

    return (
      <Styled.GeneralDisplay>

        <Header/>
      
          {feed()}        
      </Styled.GeneralDisplay>
    );
  }
  
export default RecipesList;
  
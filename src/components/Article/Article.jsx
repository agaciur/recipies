import { useContext } from "react";
import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { IsLoggedInStateContext } from "../../context/IsLoggedInStateContext";

export function Article() {
    const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext)
    return (
        <article>
            <Recipe
        
            />
          {
            isLoggedIn ?   <Button onClick={() => alert("Przepis polubiony!")}>
            Lubię to!
        </Button> : <div><p>Zaloguj się, aby polubić przepis:</p> <Button onClick={() => setIsLoggedIn(true)}>Zaloguj się</Button></div>
          }
        </article>
    );
}

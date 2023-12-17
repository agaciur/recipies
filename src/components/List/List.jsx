import { useContext } from "react";
import styles from "./List.module.css";
import { Button } from "../Button/Button";
import { RecipeContext } from "../../context/RecipeContext";

export function List({ recipes, onSelectRecipe }) {
    const selectedRecipie = useContext(RecipeContext)
    return (
        <nav className={styles.nav}>
            <span className={styles.title}>Lista przepisów:</span>
            <ul className={styles.list}>
                {recipes.map(({ id, name }) => (
                    <li key={id} className={styles.item}>
                        <Button 
                        active={id === selectedRecipie.id}
                        onClick={() => onSelectRecipe(id)}>
                            {name}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

import { fetchAPI } from "../lib/theCocktailDB";
import { useAsync } from "../utilities";

type Ingredient = {
  text: string;
  thumnail: string;
};
export type Drink = {
  id: string;
  name: string;
  instructions: string;
  image: string;
  ingredients: Ingredient[];
};

type StrIngredientKey = `strIngredient${number}`;
type StrMeasureKey = `strMeasure${number}`;
type RawDrink = {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  [strIngredientKey: StrIngredientKey]: string | null;
  [strMeasureKey: StrMeasureKey]: string | null;
};
type RawData = {
  drinks: RawDrink[];
};

const reshapeData = (data: RawData | null) => {
  const rawDrink = data?.drinks[0];
  if (!rawDrink) {
    return null;
  }

  const ingredients: Ingredient[] = [];
  for (let i = 1; i < 16; i++) {
    const ingredientKey: StrIngredientKey = `strIngredient${i}`;
    const measureKey: StrMeasureKey = `strMeasure${i}`;
    if (rawDrink[ingredientKey] == null) {
      break;
    }

    const ingredientUrlEncoded = rawDrink[ingredientKey]
      ?.toLowerCase()
      .replace(" ", "%20");
    ingredients.push({
      text: `${rawDrink[measureKey]} ${rawDrink[ingredientKey]}`,
      thumnail: `https://www.thecocktaildb.com/images/ingredients/${ingredientUrlEncoded}-Medium.png`,
    });
  }

  const drink: Drink = {
    id: rawDrink.idDrink,
    name: rawDrink.strDrink,
    instructions: rawDrink.strInstructions,
    image: rawDrink.strDrinkThumb,
    ingredients,
  };

  return drink;
};

const fetchRandomDrink = async () => {
  return fetchAPI("/random.php");
};

const useRandomDrink = () => {
  const { execute, status, value, error } = useAsync(fetchRandomDrink);

  let reshaped: Drink | null = null;
  if (status === "success") {
    reshaped = reshapeData(value);
  }

  return { execute, status, value: reshaped, error };
};

export { fetchRandomDrink, useRandomDrink };

import {getPokemonFlavorText} from "@/app/utils";

export const PokemonFlavorText: React.FC<{id: string}> = async ({id}) => {
    const flavorText = await getPokemonFlavorText(id)

    return <p>{flavorText}</p>
}

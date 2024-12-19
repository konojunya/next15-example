import {Suspense} from "react";
import {PokemonList} from "@/app/components/PokemonList";
import dayjs from "dayjs";

export default async function Page() {
  return (
      <div>
        <h1>Pokemons</h1>
        <p>created by: {dayjs().format("YYYY/MM/DD HH:mm:ss.SSS")}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonList/>
        </Suspense>
      </div>
  )
}

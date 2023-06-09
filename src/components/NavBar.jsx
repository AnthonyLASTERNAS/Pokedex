const NavBar = ({ pokemonList, pokemonIndex, setPokemonIndex }) => {

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button
                    type="button"
                    onClick={() => setPokemonIndex(index)}
                    key={index}
                >
                    {pokemon.name}
                </button>
            ))}

        </nav>
    );
};
export default NavBar
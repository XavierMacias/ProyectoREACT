function Selector({animes, handleSelect}) {
    
    return (
        <div>
            <select name="" id="" onChange={handleSelect}>
                <option value='all'>All</option>
                    {animes.map((anime, i) => (
                        <option key={i} value={anime._id}>{anime.name}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default Selector;
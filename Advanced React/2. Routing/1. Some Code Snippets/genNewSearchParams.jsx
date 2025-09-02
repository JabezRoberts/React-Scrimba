
function genNewSearchParamString(key, value) {
// """Merging search params with links
//  How to not lose the typed in or added url for every search """
const sp = new URLSearchParams(searchParams)
    if (value === null) {
        sp.delete(key)
    } else {
        sp.set(key, value)
    }
    return `?${sp.toString()}`
}


function handleFilterChange(key, value) { 
    // Merging search params with the setSearchParams function
    setSearchParams(prevParams => {
        if (value === null) {
        prevParams.delete(key)
        } else {
        prevParams.set(key, value)
        }
        return prevParams
    })
}
return (
<main>
    <h2>Home</h2>
    <div>
    <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
    <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
    <Link to={genNewSearchParamString("type", null)}>Clear</Link>
    </div>
    <div>
    <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
    <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
    <button onClick={() => setSearchParams({})}>Clear</button>
    </div>
    <hr />
    {charEls}
</main>
);

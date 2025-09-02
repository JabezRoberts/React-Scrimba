return (
    <main>
      <h2>Home</h2>
      <div>
        <button onClick={() => setSearchParams({type: "jedi"})}>Jedi</button>
        <button onClick={() => setSearchParams({type: "sith"})}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );


    return (
    <main>
      <h2>Home</h2>
      <div>
        <button onClick={() => setSearchParams("?type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("?type=sith")}>Sith</button>
        <button onClick={() => setSearchParams("")}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );

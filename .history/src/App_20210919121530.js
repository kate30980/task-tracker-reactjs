function App() {
  const name = "Brad";
  const x = false;
  return (
    <div className="container">
      <h1>Hello I'm Kate</h1>
      <h2>Hello I'm {x ? "Kate" : "Peter"}</h2>
    </div>
  );
}

export default App;

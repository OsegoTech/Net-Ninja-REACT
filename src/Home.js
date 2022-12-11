const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Mario", e);
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;

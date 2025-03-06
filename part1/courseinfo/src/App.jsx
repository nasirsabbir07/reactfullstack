const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.toc[0].name}: {props.toc[0].exercises} exercises
      </p>
      <p>
        {props.toc[1].name}: {props.toc[1].exercises} exercises
      </p>
      <p>
        {props.toc[2].name}: {props.toc[2].exercises} exercises
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.toc[0].exercises + props.toc[1].exercises + props.toc[2].exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const toc = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content toc={toc}></Content>
      <Total toc={toc}></Total>
    </div>
  );
};

export default App;

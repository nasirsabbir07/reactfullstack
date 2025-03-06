const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.toc[0].name} exercise={props.toc[0].exercises} exercises></Part>
      <Part part={props.toc[1].name} exercise={props.toc[1].exercises} exercises></Part>
      <Part part={props.toc[2].name} exercise={props.toc[2].exercises} exercises></Part>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part}: {props.exercise}
    </p>
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

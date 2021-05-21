import React, { useEffect, useState } from "react";
// Line 1 - no need to import React if using latest react version

const css = {
  fontSize: "12px",
};
// Line 4 - could move styles into its own file

function CarsFuuel(props) {
  return <h1 style={css}>Car's fuel consumed: {props.children}</h1>;
}
// Line 9 - move this component into its own file, its good to keep one component per file if possible, spelling error, should be CarsFuel
// Line 9 and 10 - could destructure props
// Line 9 - make function into a const arrow function - const CarsFuel = ({fuel}) => <h1>Car's fuel consumed: {fuel}</h1>
// Line 10 - could use 	&#39;	html code instead of ' for apostrophe
// Line 11 - should avoid using inline styles, could give this component class or use styles components

function Alert(props) {
  const fuel = props.fuel;
  const [state, setState] = useState(0);

  useEffect(() => {
    if (fuel > 1200) {
      setState(1);
    }
  }, [fuel]);

  if (state) {
    return <h2 style={{ color: "red" }}>Alert</h2>;
  } else {
    return <h2>All is fine</h2>;
  }
}
// Line 18 - make function into a const arrow function and destructure props
// Line 18 - move this component into its own file
// Line 20 and 25 - could use more descriptive name for sate, change state from number to boolean
// Line 28 - could use ternary operator instead
// Line 29 - should not use inline styles, refactor into className or styled component, move it to separate file

class App extends React.Component {
  constructor(props) {
    super(props);

    // We declare the state
    this.state = {
      x: 1,
      f: 0,
    };
  }

  updateCoordinates() {
    setInterval(() => {
      this.setState((prevState) => ({
        x: prevState.x + 1,
        f: 1 + prevState.f + prevState.x * 10,
      }));
    }, 1000);
  }

  componentDidMount() {
    this.updateCoordinates();
  }

  render() {
    var x1 = this.state.x;
    var fuel = this.state.f;

    return (
      <div>
        <h1>Position - {x1}</h1>
        <CarsFuuel>{fuel}</CarsFuuel>
        <Alert fuel={fuel} />
      </div>
    );
  }
}
// Line 40 - can refactor it into functional component
// Line 41 - can use useState to define state of this component
// Line 44 - remove comment, strive for self documenting codebase
// Line 46 and 47 - cab use more meaningful names
// Line 60 - can refactor into useEffect hook
// Line 65 - use for meaning full name for variable
// Line 65 and 66 - use const instead of var
// Line 71 - Spelling error, should be CarsFuel

export default App;

import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {


  return (
    <>
    <ClassComponent/>
    <FunctionalComponent/>
    <ArrowFunctionalComponent/>
    <ArrowFunctionalComponentWithProps title="Arrow Functional Component With Props"/>
    <ArrowFunctionalComponentWithPropsType title="Arrow Functional Component With Props"
                                       description="This is a description"/>
    </>
  )
}

export default App

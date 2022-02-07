import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route exact path="/" element={<Home />} />
    </ReactRoutes>
  )
}

export default Routes;
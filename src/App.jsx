import GlobalStyle from "./Styles/global";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

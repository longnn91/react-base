import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { cityApi } from "./api/cityApi";
import Appbar from "./components/AppBar";
import MaterialExam from "./MaterialExam";
import LandingPage from "./views/LandingPage";

const useStyles = makeStyles({
  button: {
    color: "white",
    backgroundColor: "black",
  },
});

function App() {
  const classes = useStyles();
  useEffect(() => {
    console.log("join effect");
    cityApi.getAll({ page: 1, limit: 2 }).then((response) => {
      console.log({ response });
    });
  });
  return (
    <div className="App">
      <Appbar />
    </div>
  );
}

export default App;

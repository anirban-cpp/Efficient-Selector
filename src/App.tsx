import "./App.css";
import { Box } from "@mantine/core";
import AddToFirstButton from "./components/AddToFirstButton";
import FirstValue from "./components/FirstValue";
import AddToSecondButton from "./components/AddToSecondButton";
import SecondValue from "./components/SecondValue";
import DoNothingButton from "./components/DoNothingButton";
import NumbersValue from "./components/NumbersValue";

function App() {
  return (
    <Box p={10}>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <DoNothingButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 10
        }}
      >
        <AddToFirstButton />
        <FirstValue />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <AddToSecondButton />
        <SecondValue />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <NumbersValue/>
      </Box>
    </Box>
  );
}

export default App;

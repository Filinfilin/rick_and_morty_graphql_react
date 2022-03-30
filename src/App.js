import CharacterList from "./pages/characterList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/character";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
};

export default App;

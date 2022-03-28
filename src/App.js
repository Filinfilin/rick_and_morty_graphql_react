import CharacterList from "./pages/characterList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/character";
import Search from "./search";
const App = () => {
  return (
    <div>
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/search" element={<Search />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
};

export default App;

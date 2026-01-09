import { useState } from "react";
import { heroes } from "./data/heroes";
import Button from "./components/Button";
import HeroesGrid from "./components/HeroesGrid";

function App() {
  const [activeRole, setActiveRole] = useState("all");

  const roles = ["all", "Tank", "Mage", "Assassin", "Healer"];

  const filteredHeroes =
    activeRole === "all"
      ? heroes
      : heroes.filter(hero => hero.role === activeRole);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Heroes of the Storm</h1>

      <section style={{ display: "flex", gap: "10px" }}>
        {roles.map(role => (
          <Button
            key={role}
            isActive={activeRole === role}
            onClick={() => setActiveRole(role)}
          >
            {role}
          </Button>
        ))}
      </section>

      <section style={{ marginTop: "30px" }}>
        <HeroesGrid heroes={filteredHeroes} />
      </section>
    </div>
  );
}

export default App;

function HeroesGrid({ heroes }) {
  return (
    <ul>
      {heroes.map(hero => (
        <li key={hero.id}>
          {hero.name} — {hero.role}
        </li>
      ))}
    </ul>
  );
}

export default HeroesGrid;

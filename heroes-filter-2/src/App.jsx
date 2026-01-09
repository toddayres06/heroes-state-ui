import { useState } from 'react'
import {heroes} from './data/heroes.js'
import Button from './components/Button'
import HeroesGrid from './components/HeroesGrid'

import { capitalizeWords } from './utils.js/stringUtils.js'


function App() {
  const [activeRole, setActiveRole] = useState('all')

  const roles = ['all', 'ranged assassin', 'melee assassin', 'healer', 'tank']

  const filteredRole = 
    activeRole === 'all'
    ? heroes
    : heroes.filter(hero => (hero.role === activeRole))

  return (
    <div>
      <h4>Heroes filtering practice</h4>
      <div>
        {roles.map(role => (
          <Button
            key={role}
            onClick={() => setActiveRole(role)}
            isActive={role === activeRole}>
              {capitalizeWords(role)}
            </Button>
        ))}
      </div>
      <div>
        <HeroesGrid heroes={filteredRole} />
      </div>
    </div>
  )
}

export default App
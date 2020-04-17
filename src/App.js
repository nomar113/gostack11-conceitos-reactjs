import React, { useState } from 'react';
import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Fron-end web']);

  function handleAddProject() {
    setProjects([...projects, `New Projects ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;

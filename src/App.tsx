import { Route, Routes } from 'react-router';
import Story from './Story';
import Projects from './Projects';
import Hero from './Hero';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Story />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;

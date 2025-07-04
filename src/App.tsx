import { Route, Routes } from 'react-router';
import Story from './Story';
import Projects from './Projects';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Story />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;

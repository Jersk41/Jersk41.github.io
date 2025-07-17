import { Route, Routes } from 'react-router';
import Story from './Story';
import Desktop from './Desktop';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Story />} />
      <Route path="/projects" element={<Desktop/>} />
    </Routes>
  );
};

export default App;

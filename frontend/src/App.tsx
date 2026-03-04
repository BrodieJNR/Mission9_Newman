import './App.css';
import Heading from './components/Heading';
import TeamsList from './components/TeamsList';

// Main App component that serves as the root of the application
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamsList />
    </div>
  );
}

export default App;


import { useTheme } from "./context";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
    </button>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>My App</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
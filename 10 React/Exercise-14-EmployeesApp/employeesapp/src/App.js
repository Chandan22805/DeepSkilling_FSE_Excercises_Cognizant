import { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const employees = [
    { id: 1, name: "Employee One", role: "Developer" },
    { id: 2, name: "Employee Two", role: "Tester" },
    { id: 3, name: "Employee Three", role: "Manager" }
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Employee Management Application</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change Theme
        </button>
        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

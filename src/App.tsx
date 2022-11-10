import React from "react";
import { handleLogin } from "./services/vehiclesService";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <h2>Login</h2>
          <input type="text" />
          <input type="text" />
          <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
            Esqueci minha senha
          </a>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <span>
            Ainda não tem conta?
            <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
              Cria minha conta
            </a>
          </span>
        </form>
      </header>
    </div>
  );
}

export default App;

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="app-study">
      <header className ="App-header">
      <a
        className ="App-logo"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQw3GCT64XQQ5WL2WOcGF0LgRjwzH52GgWDEfDnC-Wg&s"
          alt="Картинка"
        ></img>
      </a>
    </header>
    <nav className = "app-list-container">
        <ul className = "app-list">
            <li>text text</li>
            <li>text text</li>
            <li>text text</li>
            <li>text text</li>
            <li>text text</li>
        </ul>
        <div>
          Hello I have been updated.
        </div>
    </nav>
    </div>
  );
}

export default App;

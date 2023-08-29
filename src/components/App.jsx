import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    </BrowserRouter>
  );
};

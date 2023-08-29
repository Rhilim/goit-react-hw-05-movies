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


// API_KEY = '370cedd7ac7db43491cdc5a63d979178';

// API Read Access Token = eyJhbGciOiJIUzI1NiJ9.'eyJhdWQiOiIzNzBjZWRkN2FjN2RiNDM0OTFjZGM1YTYzZDk3OTE3OCIsInN1YiI6IjY0ZWRmMTU5NTk0Yzk0MDEzOWNhNWMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ'.K2jCVn_RVGCejH5kZgcmybGQri87X46QtXPYHOTCLXo
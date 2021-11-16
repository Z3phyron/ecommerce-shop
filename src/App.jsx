import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import DbContextProvier from "./contexts/DbContext";

function App(props) {
  return (
    <AuthContextProvider>
      <DbContextProvier>
        <AppRouter />
      </DbContextProvier>
    </AuthContextProvider>
  );
}

export default App;

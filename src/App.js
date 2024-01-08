import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignIN from "./pages/SignIN";
import SignUP from "./pages/SignUP";
import Account from "./pages/Account";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIN />} />
          <Route path="/signup" element={<SignUP />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Theme from "./styles/theme";

// Components, Pages
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Theme>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Theme from "./styles/theme";

// Components, Pages
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Test from "./pages/Test";

const App = () => {
  return (
    <Theme>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/test' element={<Layout />}>
          <Route index element={<Test />} />
        </Route>
      </Routes>
    </Theme>
  );
};

export default App;

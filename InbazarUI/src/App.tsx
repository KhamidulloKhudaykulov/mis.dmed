import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/products" element={<Products />} />
      </Route>
    )
  );
  const topRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route path="/products" element={<Products />} />
      </Route>
    )
  );
  return (
    <div className="flex flex-col bg-slate-100 h-screen">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route1 } from "../pages/Route1";
import { Route2 } from "../pages/Route2";
import { Landing } from "../pages/Landing";
import { ErrorPage } from "../pages/ErrorPage";
import { Layout } from "../components/Layout";

export function AppRouter() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="/route-1" element={<Route1 />} />
              <Route path="/route-2" element={<Route2 />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default AppRouter;

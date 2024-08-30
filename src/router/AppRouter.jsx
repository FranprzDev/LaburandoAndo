import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import ClientRouter from "./ClientRouter";
import WorkerRouter from "./WorkerRouter";
import AdminRouter from "./AdminRouter";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<ClientRouter/>} />
        <Route path="/work/*" element={<WorkerRouter/>} />
        <Route path="/auth/*" element={<AuthRouter/>} />
        <Route path="/admin/*" element={
          <ProtectedAdminRoutes>
            <AdminRouter />
            </ProtectedAdminRoutes>} />
    </Routes>
  );
};

export default AppRouter;

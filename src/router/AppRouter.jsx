import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import ClientRouter from "./ClientRouter";
import WorkerRouter from "./WorkerRouter";
import AdminRouter from "./AdminRouter";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<ClientRouter/>} />
        <Route path="/work/*" element={<WorkerRouter/>} />
        <Route path="/auth/*" element={<AuthRouter/>} />
        <Route path="/admin/*" element={<AdminRouter />} />
    </Routes>
  );
};

export default AppRouter;

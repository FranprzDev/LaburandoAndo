import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import ClientRouter from "./ClientRouter";
import WorkerRouter from "./WorkerRouter";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<ClientRouter/>} />
        <Route path="/work/*" element={<WorkerRouter/>} />
        <Route path="/auth/*" element={<AuthRouter/>} />
    </Routes>
  );
};

export default AppRouter;

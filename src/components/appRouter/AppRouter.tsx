import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div className="app-router__wrap">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;

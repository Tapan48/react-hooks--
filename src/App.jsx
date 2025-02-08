import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute";
import AdminPage from "./pages/admin";
import LoginPage from "./pages/login";
import UnauthorizedPage from "./pages/unauthorized";
import UserPage from "./pages/userpage";
function App() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-card-foreground">
            React Hooks
          </h1>
        </div>

        {/* Your commented components */}
        {/* <Us1 /> */}
        {/* <Us2 /> */}
        {/* <Ue1 /> */}
        {/* <Up1 /> */}
        {/* <Reftut/> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <LifecycleA /> */}
        {/* <LifecycleAupdate /> */}
        {/* <Yesuc /> */}
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute roles={["user", "admin"]}>
                <UserPage />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* <Um1/>  */}
        {/* <ConditionalRenderingExample /> */}
      </div>
    </div>
  );
}

export default App;

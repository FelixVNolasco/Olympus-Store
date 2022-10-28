
import { BrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./components/Shared/Navbar/NavbarComponent";
import { RootStateOrAny, useSelector } from "react-redux";
import { Footer } from "./components/Shared/Footer";
import { ProtectedRouteProps } from "./components/ProtectedRoute";
import { AnimatedRoutes } from "./components/AnimatedRoutes";


const App = () => {
  const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
    authenticationPath: '/auth/login',
  };

  return (

    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between text-gray-800">
        <NavbarComponent />
        <AnimatedRoutes routeProtection={defaultProtectedRouteProps} />
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App

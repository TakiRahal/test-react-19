import {Route, Routes} from "react-router";
import {lazy} from "react";

const HomePage = lazy(() => import('../../../modules/home/components/HomePage'));
const MarketPlacePage = lazy(() => import('../../../modules/marketplace/components/MarketPlace'));
const SignInPage = lazy(() => import('../../../modules/signin/components/SignInPage'));
const SignUpPage = lazy(() => import('../../../modules/signup/components/SignUpPage'));
const AboutPage = lazy(() => import('../../../modules/about-us/components/AboutUsPage'));
const ForgotPagePage = lazy(() => import('../../../modules/forgot-password/components/ForgotPasswordPage'));

const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="marketplace" element={<MarketPlacePage/>}/>
        <Route path="signin" element={<SignInPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="forgot-password" element={<ForgotPagePage/>}/>
      </Routes>
  )
}
export default RoutesApp

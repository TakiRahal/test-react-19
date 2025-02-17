import {Route, Routes} from "react-router";
import {lazy} from "react";

const HomePage = lazy(() => import('../../../modules/home/components/HomePage.tsx'));
const MarketPlacePage = lazy(() => import('../../../modules/marketplace/components/MarketPlace.tsx'));
const SignInPage = lazy(() => import('../../../modules/signin/components/SignInPage.tsx'));
const SignUpPage = lazy(() => import('../../../modules/signup/components/SignUpPage.tsx'));
const AboutPage = lazy(() => import('../../../modules/about-us/components/AboutUsPage.tsx'));

const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="marketplace" element={<MarketPlacePage/>}/>
        <Route path="signin" element={<SignInPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
      </Routes>
  )
}
export default RoutesApp

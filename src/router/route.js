import LandingPage from "../pages/LandingPange/LandingPage";
import Owner from "../pages/Owners/Owner";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Listing from "../pages/Listing/Listing";
import CleaningHospital from "../pages/cleaning/CleaningHospital";
import Ambience from "../pages/cleaning/Ambience";
export const routes = [
  {
    path: "/",
    exact: true,
    component: LandingPage,
    name: " LandingPage",
  },
  {
    path: "/owners",
    exact: true,
    component: Owner,
    name: " Owner",
  },
  {
    path: "/about",
    exact: true,
    component: About,
    name: "About",
  },
  {
    path: "/contact",
    exact: true,
    component: Contact,
    name: "Contact",
  },
  {
    path: "/listing",
    exact: true,
    component: Listing,
    name: "Listing",
  },
  {
    path: "/clean",
    exact: true,
    component: CleaningHospital,
    name: "CleaningHospital",
  },
  {
    path: "/ambience",
    exact: true,
    component: Ambience,
    name: "Ambience",
  },
];

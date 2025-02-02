/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";
import { WalletRounded, PagesRounded } from "@mui/icons-material";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

export const MainRoutes = [
  {
    name: "Pages",
    icon: (
      <Icon>
        <PagesRounded />
      </Icon>
    ),
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "User Authentication",
        collapse: [
          {
            name: "Sign In",
            route: "/authentication/signin",
            component: <SignIn />,
          },
          {
            name: "Sign Up",
            route: "/authentication/signup",
            component: <SignUp />,
          },
        ],
      },
      {
        name: "Wallet",
        collapse: [
          {
            name: "Dashboard",
            route: "/wallet/dashboard",
            component: <Dashboard />,
          },
        ],
      },
      {
        name: "Home",
        collapse: [
          {
            name: "Landing",
            route: "/landing",
            component: <Landing />,
          },
        ],
      },
    ],
  },
  {
    name: "Repository",
    icon: <GitHubIcon />,
    route: "https://github.com/eightkeh/PayPlease",
  },
];

export const WalletRoutes = [
  {
    name: "Pages",
    icon: (
      <Icon>
        <WalletRounded />
      </Icon>
    ),
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Wallet",
        collapse: [
          {
            name: "Dashboard",
            route: "/wallet/dashboard",
            component: <Dashboard />,
          },
        ],
      },
    ],
  },
];

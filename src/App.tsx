import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const App = () => {
  return (
    <>
      {/* <NavbarComponent /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;

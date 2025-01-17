import { RouterProvider } from "react-router-dom";
import { TemplateContextProvider } from "./contexts/TemplateContext";
import router from "./Router";

function App() {
  return (
    <TemplateContextProvider>
      <RouterProvider router={router} />
    </TemplateContextProvider>
  );
}

export default App;

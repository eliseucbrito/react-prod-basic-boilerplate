import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { TemplateContextProvider } from "./contexts/TemplateContext";
import router from "./Router";
import { queryClient } from "./services/api/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TemplateContextProvider>
        <RouterProvider router={router} />
      </TemplateContextProvider>
    </QueryClientProvider>
  );
}

export default App;

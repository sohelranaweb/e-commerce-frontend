import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { router } from "./routes/index.tsx";
import { Toaster } from "sonner";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster richColors></Toaster>
    </ReduxProvider>
  </StrictMode>
);

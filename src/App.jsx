import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import MainLayout from "./layout/mainLayout";
import CoursePage from "./pages/coursepage";
import NotFoundPage from "./pages/notFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/course" element={<CoursePage />}/>
      <Route path="*" element={<NotFoundPage />}/>

    </Route>
  )
)
const App = () => {
  return (<RouterProvider router={router} /> )
}

export default App;
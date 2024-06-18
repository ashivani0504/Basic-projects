import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Accordian from "./pages/Accordian";
import AppLayout from "./ui/AppLayout";
import RandomColorGenerator from "./pages/RandomColorGenerator";

import ImageSlider from "./pages/ImageSlider";
import PageNotFound from "./pages/PageNotFound";
import Counter from "./pages/Counter";
import ToDo from "./pages/ToDo";
import FetchingData from "./pages/FetchingData";
import FormValidation from "./pages/FormValidation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="accordian" />} />
          <Route path="accordian" element={<Accordian />} />
          <Route
            path="randomColorGenerator"
            element={<RandomColorGenerator />}
          />
          <Route path="counter" element={<Counter />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="fetch" element={<FetchingData />} />
          <Route path="imageSlider" element={<ImageSlider />} />
          <Route path="formvalidation" element={<FormValidation />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

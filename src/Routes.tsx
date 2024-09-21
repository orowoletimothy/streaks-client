import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";

// type Props = {}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
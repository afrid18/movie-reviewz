import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            {/* <Route path="/Movies" element={<Movies />} />
            <Route path="/AddMovie" element={<AddMovie />} />
            <Route path="/AdminDash" element={<Admindash />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/AdminReview" element={<AdminReview />} />
            <Route path="/Login" element={<UserLogin />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;

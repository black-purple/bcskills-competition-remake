import Login from "./components/Auth/Login";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import Archive from "./pages/Archive";
import UpdatePatient from "./pages/UpdatePatient";
import ViewPatient from "./pages/ViewPatient";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="archive" element={<Archive/>}/>
        <Route path="dossier/addpatient" element={<AddPatient/>}/>
        <Route path="dossier/Updatepatient" element={<UpdatePatient/>}/>
        <Route path="dossier/Viewpatient" element={<ViewPatient/>}/>
      </Routes>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client';
import { SignInSide, SignUpSide, BlankPage } from './App.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Routes>
    <Route path="/" element={<SignInSide />} />
    <Route path="/login" element={<SignInSide />} />
    <Route path="/signup" element={<SignUpSide />} />
    <Route path="*" element={<BlankPage />} />
  </Routes>
</Router>
);

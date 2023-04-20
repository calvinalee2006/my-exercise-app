import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import "./styles.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
    <HashRouter>
    document.getElementById('root'));
root.render(
<App />
</HashRouter>
)




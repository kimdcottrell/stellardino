import { render } from "preact";

import "./index.css";
import { App } from "./app.tsx";

render(
<App />
, document.getElementById("app")!);

// const root = document.getElementById("app")!
// ReactDOM.createRoot(root).render(
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<App />} />
    //     </Routes>
    // </BrowserRouter>
// );
  
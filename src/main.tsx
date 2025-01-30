import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/routes.ts";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.ts";

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement)
    root.render(
        <Provider store={store}>
            <BrowserRouter basename={AppRoutes.root}>
                <App/>
            </BrowserRouter>
        </Provider>
)

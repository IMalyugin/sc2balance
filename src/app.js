import ReactDOM from "react-dom";
import {Root} from "./components/exports";
import "./app.scss";

export function init(container) {
	ReactDOM.render(<Root />, container);
}

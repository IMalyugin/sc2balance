import ReactDOM from "react-dom";
import Root from "./components/Root/Root.jsx";
import "./app.scss";

export default function Init(container) {
	ReactDOM.render(<Root />, container);
}

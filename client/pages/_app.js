import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const store = createStore(reducers, {}, applyMiddleware());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

// src/Router.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../../App';
import Home from '../Home/Home';
import { usePages } from '../Pages/usePages';
import Page from '../Pages/Page';

const Routing = () => {
  const pages = usePages();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          {pages.map((page) => (
            <Route
              key={page.title}
              path={page.title.toLowerCase()}
              element={<Page {...page} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;

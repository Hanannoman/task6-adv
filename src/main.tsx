import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Routes from './pages/Routes';
import Home from './pages/Home';
import NewsLetter from './pages/NewsLetterPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlogPage from './pages/BlogPage';

const route=createBrowserRouter(
  [{
    path:'/',
    element:<Routes/>, children:
    [
   
      {
         path:"/",
    element:<Home/>
      },
      {
         path:"/blog/:id",
    element:<BlogPage
    />
      },
      {
            path:"/news",
    element:<NewsLetter/>
      },
    ]
  }]
)

createRoot(document.getElementById('root')!).render(
   
      <StrictMode>
     <Provider store={store}>
         <RouterProvider router={route}/>
     </Provider>
  </StrictMode>
  
  

)

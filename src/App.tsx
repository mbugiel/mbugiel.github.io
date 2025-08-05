import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AboutMe from './components/page/AboutMe';
import NotFound from './components/page/NotFound';
import Projects from './components/page/Projects';
import Contact from './components/page/Contact';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children:[
      {
        index: true,
        element:<AboutMe/>
      },
      {
        path: 'projects',
        element:<Projects/>
      },
      {
        path: 'contact',
        element:<Contact/>
      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  },

], {basename:"/portfolio"});


function App() {

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App

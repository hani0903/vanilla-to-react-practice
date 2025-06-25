import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Hex from './pages/Hex';
import Rgb from './pages/Rgb';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,

        children: [
            { index: true, element: <Rgb /> },
            { path: 'hex', element: <Hex /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

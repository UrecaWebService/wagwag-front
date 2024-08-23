import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { RouterObject } from './RouterList'; // Import RouterObject instead of RouterList
import './styles/index.css';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; // Access your Google Client ID from .env

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={clientId}>
            <RecoilRoot>
                <RouterProvider router={RouterObject} />
            </RecoilRoot>
        </GoogleOAuthProvider>
    </StrictMode>,
);

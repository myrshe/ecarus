import { Header } from './widgets/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionPointsPage from './pages/CollectionPointsPage';
import EcoMarketPage from './pages/EcoMarketPage';
import ProfilePage from './pages/ProfilePage/index.tsx';
import { Footer } from './widgets/Footer/components/index.tsx';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/collectionPoints" element={<CollectionPointsPage />} />
                <Route path="/ecoMarket" element={<EcoMarketPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

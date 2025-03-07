import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlankPage from '../pages/BlankPage';
import Blog from '../pages/Blog';
import SinglePost from '../pages/SinglePost';
import Store from '../pages/Store';
import Carrito from '../pages/Carrito';
import Checkout from '../pages/Checkout';
import PaySuccess from '../pages/PaymentFinish/PaySuccess';
import Carritoerr from '../pages/Carritoerr';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BlankPage />} />
                <Route path="/consejos-para-padres" element={<Blog />} />
                <Route path="/post/:postId" element={<SinglePost />} />
                <Route path="/experiencias" element={<Store />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/carrito/error" element={<Carritoerr />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/ok" element={<PaySuccess />} />
            </Routes>
        </Router>
    );
}

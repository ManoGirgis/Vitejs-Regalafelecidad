import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../components/Store/WooCommerce';
import AppointmentAPI from '../components/Store/AppointmentAPI';
import Navigation from "../components/Store/Navigation";
import AddCartbtn from '../components/Store/AddCartBtn';
import Reservarbtn from '../components/Store/ReserveBtn';

const SingleProduct = (props) => {
    const [productId, setProductId] = useState(props.id);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const { data: appointments, loadingAppo, errorAppo } = AppointmentAPI("availabilities");

    const [product, setProduct] = useState({});
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [options, setOptions] = useState([]);
    const [minfecha, setMinFecha] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (products) {
            const foundProduct = products.find(p => p.id === productId);
            if (foundProduct) {
                setProduct(foundProduct);
                setSelectedImage(foundProduct.images?.[0]?.src || "");
            }
        }
    }, [products, productId]);

    useEffect(() => {
        const today = new Date();
        setMinFecha(today.toISOString().split("T")[0]); // Fecha mínima = hoy
    }, []);

    useEffect(() => {
        if (appointments) {
            const availableTimes = appointments
                .map(app => app.from)
                .filter(Boolean);
            setOptions(availableTimes);
        }
    }, [appointments]);

    if (loading || loadingAppo) return <div>Cargando...</div>;
    if (error || errorAppo) return <div>Error cargando los datos.</div>;

    const handleDateChange = (e) => setFecha(e.target.value);
    const handleTimeChange = (e) => setHora(e.target.value);
    const nextProd = (nextId) => setProductId(nextId);
    const prevProd = (prevId) => setProductId(prevId);

    return (
        <div className="container mx-auto px-4">
            {/* Grid principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Sección de imágenes */}
                <div>
                    {/* Imagen destacada */}
                    <div className="relative">
                        <img 
                            src={selectedImage} 
                            alt={product.name || "product-default"}
                            className="w-full h-96 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Miniaturas */}
                    <div className="flex gap-2 mt-4">
                        {product.images?.map((img, index) => (
                            <img 
                                key={index}
                                src={img.src}
                                alt={`Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-md cursor-pointer transition hover:opacity-80 ${selectedImage === img.src ? 'border-2 border-yellow-500' : ''}`}
                                onClick={() => setSelectedImage(img.src)}
                            />
                        ))}
                    </div>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col">
                    {/* Título y valoraciones */}
                    <h1 className="text-3xl font-bold text-blue-900">{product.name}</h1>
                    <div className="flex items-center gap-1 text-yellow-500 mt-2">
                        ⭐⭐⭐⭐⭐ <span className="text-gray-600 text-sm">(4 valoraciones de clientes)</span>
                    </div>

                    {/* Precio */}
                    <p className="text-2xl text-gray-900 font-semibold mt-2">Desde {product.price}€ — <span className="text-gray-500">Por persona</span></p>

                    {/* Categoría y ubicación */}
                    <div className="flex gap-4 mt-4">
                        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Actividad individual</span>
                        <span className="flex items-center text-gray-700 gap-2">
                            📍 Barcelona
                        </span>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-700 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: product.description }} />

                    {/* Opciones de reserva si es un "appointment" */}
                    {product.type === "appointment" && (
                        <div className="mt-6">
                            <label className="block text-gray-600">Seleccionar Fecha:</label>
                            <input 
                                type="date" 
                                min={minfecha} 
                                className="border border-gray-300 p-2 rounded w-full"
                                onChange={handleDateChange}
                            />

                            <label className="block text-gray-600 mt-4">Seleccionar Hora:</label>
                            <select 
                                className="border border-gray-300 p-2 rounded w-full"
                                value={hora || ""}
                                onChange={handleTimeChange}
                            >
                                <option value="">Seleccionar hora disponible</option>
                                {options.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>

                            <Reservarbtn prod={product} date={fecha} time={hora} />
                        </div>
                    )}

                    {/* Botón de añadir al carrito si no es appointment */}
                    {product.type !== "appointment" && (
                        <div className="mt-4">
                            <AddCartbtn prod={product} />
                        </div>
                    )}
                </div>
            </div>

            {/* Navegación entre productos */}
            <Navigation navi="products" current={product.id} right={nextProd} left={prevProd} />
        </div>
    );
};

export default SingleProduct;

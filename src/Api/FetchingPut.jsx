import { useState } from "react";

const FetchingPut = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (link, updatedata) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_WORDPRESS_API_URL}/${link}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + btoa(`${import.meta.env.VITE_WC_CONSUMER_KEY}:${import.meta.env.VITE_WC_CONSUMER_SECRET}`),
                },
                body: JSON.stringify(updatedata),
            });
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { data, loading, error, fetchData };
}

export default FetchingPut;
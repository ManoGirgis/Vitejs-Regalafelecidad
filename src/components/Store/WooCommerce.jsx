import { useEffect, useState } from "react";
import axios from 'axios';

const Woocommerce = (required) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const consumerKey = import.meta.env.VITE_WC_CONSUMER_KEY;
                const consumerSecret = import.meta.env.VITE_WC_CONSUMER_SECRET;
                const storeUrl = import.meta.env.VITE_WC_STORE_URL;

                if (!consumerKey || !consumerSecret || !storeUrl) {
                    throw new Error("WooCommerce credentials not provided.");
                }

                const url = `${storeUrl}/wp-json/wc/v3/${required}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [required]);

    return { data, loading, error };
};

export default Woocommerce;

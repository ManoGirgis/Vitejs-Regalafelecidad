import React, { useEffect, useState } from "react";
import WoocommerceConnection from '../Store/WooCommerce';

const Navigation = (props) => {
    const { data: item, loading, error } = WoocommerceConnection(props.navi);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [current, setCurrent] = useState(props.current);

    useEffect(() => {
        if (item && item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                if (item[i].id === props.current) {
                    if (i + 1 < item.length) {
                        setNext(item[i + 1]);
                    } else {
                        setNext(null);
                    }
                    if (i - 1 >= 0) {
                        setPrev(item[i - 1]);
                    } else {
                        setPrev(null);
                    }
                    break;
                }
            }
        }
    }, [item, current]);

    useEffect(() => {
        console.log('Next item:', next);
        console.log('Previous item:', prev);
    }, [next, prev]);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const toprev = () => {
        if (prev) {
            props.left(prev.id);
        }
    };

    const tonext = () => {
        if (next) {
            props.right(next.id);
        }
    };

    return (
        <div className="flex justify-between mt-12">
            {prev && (
                <div onClick={toprev} className="flex items-center gap-3 text-rgx-text">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg> {prev.name}
                </div>
            )}
            {next && (
                <div onClick={tonext} className="flex items-center gap-3 text-rgx-text">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg> {next.name}
                </div>
            )}
        </div>
    );
}

export default Navigation;

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Posts, GET_POST_NUMBER } from '../queries';
import AsideMenu from '../components/Blog/AsideMenu';

const Blog = () => {
    const [first] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [after, setAfter] = useState(null);

    const { loading, error, data, fetchMore } = useQuery(Get_Posts, {
        variables: { first, after },
        notifyOnNetworkStatusChange: true,
    });

    const { loading: loadingPostNumber, error: errorPostNumber, data: postNumberData } = useQuery(GET_POST_NUMBER);

    useEffect(() => {
        if (currentPage === 1) {
            setAfter(null);
        } else {
            const fetchPageData = async () => {
                const endCursor = await fetchEndCursor((currentPage - 1) * first);
                setAfter(endCursor);
            };
            fetchPageData();
        }
    }, [currentPage]);

    const fetchEndCursor = async (skip) => {
        const result = await fetchMore({
            variables: { first: skip, after: null },
        });
        return result.data.posts.pageInfo.endCursor;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading || loadingPostNumber) return <p className="text-center">Cargando...</p>;
    if (error || errorPostNumber) return <p className="text-center">Error: {error?.message || errorPostNumber?.message}</p>;

    const posts = data?.posts?.edges?.map(edge => edge.node) || [];
    const totalPosts = postNumberData?.posts?.pageInfo?.total || 0;
    const totalPages = Math.ceil(totalPosts / first);

    return (
        <div className="md:flex md:gap-6">
            {/* Sección principal de blogs */}            
            <div className="w-full md:w-3/4">        
                <h1 className='text-rgx-blue text-[42px] font-semibold mb-8 font-montserrat'>Consejos para padres</h1>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <a key={post.id} href={'/post/' + post.id} className="flex flex-col md:flex-row items-center gap-6 mb-6 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                            {/* Imagen alineada a la izquierda */}
                            <img 
                                src={post.featuredImage ? post.featuredImage.node.sourceUrl : null} 
                                alt="Post" 
                                className="w-full md:w-1/3 h-48 object-cover rounded-md"
                            />

                            {/* Contenido alineado a la derecha */}
                            <div className="w-full md:w-2/3">
                                <h1 className="text-xl font-semibold mb-2">{post.title}</h1>
                                <span className="text-gray-500 text-sm">
                                    {formatDate(post.date)} por {post.author.node.name}
                                </span>
                                <div className="mt-2 text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </a>
                    ))
                ) : (
                    <p className="text-center">Sin publicaciones disponibles.</p>
                )}

                {/* Paginación */}
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1}
                            className={`cursor-pointer px-2 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'text-rgx-orange' : ' hover:text-rgx-green'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menú lateral */}
            <div className="w-full md:w-1/4 mt-6 md:mt-0">
                <AsideMenu />
            </div>
        </div>
    );
};

export default Blog;

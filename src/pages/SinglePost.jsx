import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Get_POST_BY_ID } from '../queries';
import CommentSection from '../components/Blog/CommentSection'
import AsideMenu from '../components/Blog/AsideMenu';

const SinglePost = (props) => {
    const { postId } = useParams();

    const { loading, error, data } = useQuery(Get_POST_BY_ID, {
        variables: { id: postId },
    });

    if (loading) return <p className='text-center'>Cargando...</p>;
    if (error) return <p className='text-center'>Error: {error.message}</p>;

    const post = data?.post;

    if (!post) {
        return <p>Error 404</p>;
    }

    const comments = post.comments?.edges || [];
    return (
        <div className="container mx-auto px-4 md:flex md:gap-24">
            {/* Sección principal de la publicación */}
            <div className="w-full md:w-3/4">
                {/* Imagen destacada a pantalla completa */}
                <div className="relative">
                            <img 
                                src={post.featuredImage ? post.featuredImage.node.sourceUrl : Organizar_fiestas_infantiles_1} 
                                alt="Post" 
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Contenido de la publicación */}
                        <div className="mt-8">
                            <h1 className="text-3xl font-semibold text-rgx-blue text-center uppercase font-montserrat">
                                {post.title}
                            </h1>
                            <hr className="w-full mx-auto border-t-1 border-rgx-yellow mt-4 mb-12" />
                            <div className="text-rgx-text text-lg leading-relaxed">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>

                        {/* Sección de comentarios */}
                        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Comentarios</h2>
                            {comments.length > 0 ? (
                                <ul className="space-y-4">
                                    {comments.map(commentario => (
                                        <CommentSection key={commentario.id} comment={commentario} />
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">No hay comentarios aún.</p>
                            )}
                        </div>
            </div>
    
            {/* Menú lateral */}
            <div className="w-full md:w-1/4 mt-6 md:mt-0">
                <AsideMenu />
            </div>
        </div>
    );    
}

export default SinglePost;

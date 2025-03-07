import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Posts } from '../../queries';

const AsideMenu = () => {    
    const { loading, error, data: sidedata } = useQuery(Get_Posts, {
        variables: {
            first: 5,
        },
    });

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = sidedata.posts.edges.map(edge => edge.node);

    return (
        <div>
            <span className='uppercase text-sm text-rgx-blue font-semibold mb-4 block'>Consejos para padres</span>
            <div className='flex flex-col space-y-2'>
                {posts.map(post => (
                    <a key={post.id} href={'/' + "post/" + post.id} className='text-sm hover:text-rgx-yellow transition hover:underline'>
                        {post.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AsideMenu;

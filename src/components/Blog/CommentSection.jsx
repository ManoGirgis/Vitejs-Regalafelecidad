import React, { useEffect, useState } from "react";

const CommentSection = (props) => {
    return (
        <div key={props.comment.id} className="flex items-start gap-4 p-4 border-b border-gray-300">
            {/* Imagen del autor */}
            <img 
                src={props.comment.node.author.node.avatar.url} 
                alt="Avatar" 
                className="w-10 h-10 rounded-full object-cover"
            />
    
            {/* Contenido del comentario */}
            <div className="flex-1">
                <h1 className="text-lg font-semibold">{props.comment.node.author.node.name}</h1>
                <p className="text-gray-700 mt-1" dangerouslySetInnerHTML={{ __html: props.comment.node.content }}></p>
            </div>
        </div>
    );
};

export default CommentSection;

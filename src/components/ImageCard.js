import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg md:mt-2 md:mb-2 sm:mt-0 sm:mb-0">
            <img className="w-full" src={image.webformatURL} alt="Display"/>
            <div className="px-6 py-2">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    {image.user}
                </div>
                <ul className="text-gray-700 text-base">
                    <li><strong>Views:</strong>{image.views}</li>
                    <li><strong>Likes:</strong>{image.likes}</li>
                    <li><strong>Downloads:</strong>{image.downloads}</li>
                </ul>
            </div>
            <div className="px-6 py-2">
                {tags.map(tag => (
                    <span key={image.id} className="inline-block bg-gray-200 
                    rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard;
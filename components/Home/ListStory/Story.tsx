import React from 'react';
import Image from 'next/image';

interface Story {
    src: string;
}

const Story = ({ src }: Story) => {
    return (
        <Image
            src={src}
            alt="story"
            className="rounded-md cursor-pointer hover:opacity-70 transition-opacity duration-300 "
            width={76}
            height={91}
        />
    );
};

export default Story;

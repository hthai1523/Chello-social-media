import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="w-full h-20 bg-primary-1 fixed top-0 z-50">
            <Image
                src="./icons/Chello Logo_Final-01 2.svg"
                className="mx-auto"
                width={177}
                height={177}
                alt="logo chello"
            />
        </div>
    );
};

export default Header;

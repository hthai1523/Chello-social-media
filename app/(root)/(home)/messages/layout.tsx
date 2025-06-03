import { Search } from 'lucide-react';
import React, { ReactElement } from 'react';

const layout = ({ children }: { children: ReactElement }) => {
    return (
        <section className="grid grid-cols-3">
            <div className="col-span-1 flex items-center justify-between">
                <h1 className='font-bold text-primary-2 text-xl'>Messages</h1>
                <Search size={19} color='#a8a8a8' />
            </div>
            <div className="col-span-2">{children}</div>
        </section>
    );
};

export default layout;

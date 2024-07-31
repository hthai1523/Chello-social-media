import ListStory from '@/components/Home/ListStory';
import React, { ReactElement } from 'react';

const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <section className="space-y-6 mb-6">
            <h1 className="text-primary-2 font-bold text-xl">Home</h1>
            <ListStory />
            {children}
        </section>
    );
};

export default Layout;

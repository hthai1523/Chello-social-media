import Header from '@/components/Layout/Header';
import Rightbar from '@/components/Layout/Rightbar';
import Sidebar from '@/components/Layout/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import React, { ReactElement } from 'react';

const HomeLayout = ({ children }: { children: ReactElement }) => {
    return (
        <main>
            <Header />
            <div className="w-full grid grid-cols-12 relative pt-20">
                <section className="col-span-3 ">
                    <Sidebar />
                </section>
                <section className="col-span-6 bg-white min-h-screen  flex flex-col py-6 px-4 border border-[#E4E4E4]">
                    {children}
                </section>
                <section className="col-span-3">
                    <Rightbar />
                </section>
            </div>
            <Toaster />
        </main>
    );
};

export default HomeLayout;

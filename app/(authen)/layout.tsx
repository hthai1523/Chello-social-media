import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Rightbar from '@/components/Layout/Rightbar';
import Sidebar from '@/components/Layout/Sidebar';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import React, { ReactElement } from 'react';

const HomeLayout = ({ children }: { children: ReactElement }) => {
    return (
        <main>
            <div className="w-full md:grid md:grid-cols-2 relative">
                <div className="bg-gradient-to-r from-primary-1 via-[#3588FC] to-primary-1 w-full min-h-screen relative hidden md:block">
                    <div className="flex flex-col items-center justify-center text-white size-full absolute translate-y-[18%] overflow-hidden">
                        <Image
                            src="./icons/Chello Logo_Final-01 2.svg"
                            // className="mx-auto"
                            width={228}
                            height={228}
                            alt="logo chello"
                        />
                        <h1 className="font-bold  text-3xl">Creators + Fans = Chello</h1>
                        <p className="text-lg ">#LetsGO</p>
                        <Image src={'/icons/loginIcon.svg'} alt="logoAuthen" width={446} height={543} className=" " />
                    </div>
                </div>
                {children}
            </div>
            <Footer />
            <Toaster />
        </main>
    );
};

export default HomeLayout;

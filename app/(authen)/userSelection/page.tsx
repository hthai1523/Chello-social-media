'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

// Define Zod schema
const formSchema = z.object({
    emailAddress: z.string().email(),
    password: z.string().min(8).max(32),
    phoneNumber: z.string().min(1, "Phone number is required")
}).refine(
    (data) => {
        const iti = window.intlTelInputGlobals.getInstance(document.getElementById('phone')!);
        return iti.isValidNumber();
    },
    {
        message: "Invalid phone number",
    }
);

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: '',
            phoneNumber: '',
        },
    });

    const phoneRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (phoneRef.current) {
            const iti = intlTelInput(phoneRef.current, {
                initialCountry: 'us',
                utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
            });

            phoneRef.current.addEventListener('countrychange', function() {
                form.setValue('phoneNumber', iti.getNumber());
            });
        }
    }, [form]);

    const handleSubmit = (value: z.infer<typeof formSchema>) => {
        console.log({ value });
    };

    return (
        <section className="flex flex-col items-center justify-center mt-32 mb-12">
            <div className="w-2/3 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-2">
                    Get Ready……Get Set….. <br /> One Page Away to Use Chello
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input id="phone" {...field} ref={phoneRef} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-start justify-between">
                            <Button type="submit" className="bg-primary-1 text-white p-6 rounded-[18px]">
                                Log In
                            </Button>
                            <a href="#" className="text-[#7b7b7b] text-sm underline">
                                Forget Password?
                            </a>
                        </div>
                    </form>
                </Form>
                <p className="font-normal text-sm">
                    Dont have an account?{' '}
                    <Link href="/register" className="text-primary-2 font-bold">
                        Sign Up
                    </Link>
                </p>
                <Separator />
                <p className="text-sm text-[#7b7b7b]">or</p>
                <div className="">
                    <div className="space-y-2">
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FcGoogle size={24} />
                            Log In with Google
                        </Button>
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FaTwitter size={24} className="text-blue-400" />
                            Log In with Twitter
                        </Button>
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FaFacebookF size={24} className="text-blue-600" />
                            Log In with Facebook
                        </Button>
                    </div>
                </div>
                <div className="text-left text-primary-2 font-medium text-lg space-y-3">
                    <p>Creators keep 94% of their earnings!</p>
                    <p>Creators pay $25/mth or $240 yearly.</p>
                </div>
            </div>
        </section>
    );
}

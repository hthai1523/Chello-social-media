'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const formSchema = z
    .object({
        emailAddress: z.string().email(),
        fullname: z.string(),
        password: z.string().min(8).max(32),
        confirmPassword: z.string(),
    })
    .refine(
        (data) => {
            return data.password === data.confirmPassword;
        },
        {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
        },
    );

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: '',
            emailAddress: '',
            password: '',
            confirmPassword: '',
        },
    });

    const handleSubmit = (value: z.infer<typeof formSchema>) => {
        console.log({ value });
    };

    return (
        <section className="flex flex-col items-center justify-center mt-32 mb-12">
            <div className="w-2/3 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-2">Sign Up</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 ">
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Full Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className=" bg-primary-1 text-white p-6 rounded-[18px]">
                            Sign Up
                        </Button>
                    </form>
                </Form>
                <p className=" font-normal text-sm">
                    By signing up you agree to our{' '}
                    <Link href={'#'} className="underline text-primary-1">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href={'#'} className="underline text-primary-1">
                        Privacy Policy
                    </Link>{' '}
                    and confirm that you are at least 18 years old.
                </p>
                <p className=" font-normal text-sm">
                    Already have an accoount?{' '}
                    <Link href="/login" className="text-primary-2 font-bold">
                        Log In
                    </Link>
                </p>
                <Separator />
                <p className="text-sm text-[#7b7b7b]">or</p>
                <div className="">
                    <div className="space-y-2">
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FcGoogle size={24} />
                            Sign Up with Google
                        </Button>
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FaTwitter size={24} className="text-blue-400" />
                            Sign Up with Twitter
                        </Button>
                        <Button className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3 ">
                            <FaFacebookF size={24} className="text-blue-600" />
                            Sign Up with Facebook
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

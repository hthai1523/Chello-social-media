'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
    emailAddress: z.string().email(),
    password: z.string().min(8).max(32),
});
export default function Login() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: '',
        },
    });

    const handleSubmit = async (value: z.infer<typeof formSchema>) => {
        console.log({ value });
        if (!isLoaded) {
            return;
        }
        setLoading(true);

        try {
            const result = await signIn.create({
                identifier: value.emailAddress,
                password: value.password,
            });

            if (result.status === 'complete') {
                setActive({ session: result.createdSessionId });
                router.push('/');
            } else {
                toast({
                    variant: 'destructive',
                    title: `some error`,
                });
            }
        } catch (err: any) {
            toast({
                variant: 'destructive',
                title: `${err.errors[0].message}`,
                description: 'There was a problem with your infomation.',
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="flex flex-col items-center justify-center mt-32 mb-12">
            <div className="w-2/3 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-2">Log In</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 ">
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
                        <div className="flex items-start justify-between">
                            <Button
                                type="submit"
                                className="bg-primary-1 text-white p-6 rounded-[18px]"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </Button>

                            <a href="#" className="text-[#7b7b7b] text-sm underline">
                                Forget Password?
                            </a>
                        </div>
                    </form>
                </Form>
                <p className=" font-normal text-sm">
                    Dont have an account?{' '}
                    <Link href="/register" className="text-primary-2 font-bold">
                        Sign Up
                    </Link>
                </p>
                <Separator />
                <p className="text-sm text-[#7b7b7b]">or</p>
                <div className="">
                    <div className="space-y-2">
                        <Button
                            onClick={() =>
                                signIn?.authenticateWithRedirect({
                                    strategy: 'oauth_google',
                                    redirectUrl: '/',
                                    redirectUrlComplete: '/',
                                })
                            }
                            className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3"
                            disabled={!isLoaded || loading}
                        >
                            <FcGoogle size={24} />
                            Log In with Google
                        </Button>
                        <Button
                            onClick={() =>
                                signIn?.authenticateWithRedirect({
                                    strategy: 'oauth_twitter',
                                    redirectUrl: '/',
                                    redirectUrlComplete: '/',
                                })
                            }
                            className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3"
                            disabled={!isLoaded || loading}
                        >
                            <FaTwitter size={24} className="text-blue-400" />
                            Log In with Twitter
                        </Button>
                        <Button
                            onClick={() =>
                                signIn?.authenticateWithRedirect({
                                    strategy: 'oauth_facebook',
                                    redirectUrl: '/',
                                    redirectUrlComplete: '/',
                                })
                            }
                            className="w-3/4 p-4 border border-[#e4e4e4] bg-[#f1f1f1] text-[#7b7b7b] rounded flex items-center justify-start gap-3"
                            disabled={!isLoaded || loading}
                        >
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

'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';
const formSchema = z.object({
    code: z.string().min(6, {
        message: 'Your code must be 6 characters.',
    }),
});

interface VerifyFormProps {
    handleVerify: (code: string) => void;
}

const VerifyForm = ({ handleVerify }: VerifyFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: '',
        },
    });

    const handleSubmit = (value: z.infer<typeof formSchema>) => {
        handleVerify(value.code);
    };

    return (
        <section className="flex flex-col items-center justify-center mt-32 mb-12">
            <div className="w-2/3 space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-primary-2">Verify Your Identity</h2>
                <h3 className='text-sm'>Check your email for the code.</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 ">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-[#7B7B7B]">Your Code</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className=" bg-primary-1 text-white p-6 rounded-[18px]">
                            Submit
                        </Button>
                    </form>
                </Form>
              
            </div>
        </section>
    );
};

export default VerifyForm;

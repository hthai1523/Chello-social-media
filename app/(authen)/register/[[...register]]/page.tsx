'use client';
import React, { FormEvent, useState } from 'react';
import RegisterForm from '@/components/Layout/Register/RegisterForm';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import VerifyForm from '@/components/Layout/Register/VerifyForm';
import { useToast } from '@/components/ui/use-toast';

export default function Register() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [verifying, setVerifying] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const signUpWithEmail = async ({
        firstName,
        lastName,
        emailAddress,
        password,
    }: {
        emailAddress: string;
        password: string;
        firstName: string;
        lastName: string;
    }) => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                firstName,
                lastName,
                emailAddress,
                password,
            });
            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

            // change the UI to our pending section.
            setVerifying(true);
        } catch (err: any) {
            toast({
                variant: 'destructive',
                title: `${err.errors[0].message}`,
                description: 'There was a problem with your infomation.',
            });
        }
    };

    const handleVerify = async (code:string) => {
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });
            if (completeSignUp.status !== 'complete') {
                console.log(JSON.stringify(completeSignUp, null, 2));
            }

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push('/');
            }
        } catch (err) {
            toast({
                variant: 'destructive',
                title: 'Verification Failed',
                description: 'The code you entered was incorrect.',
            });
        }
    };

    return (
        <>
            {!verifying ? (
                <RegisterForm signUpWithEmail={signUpWithEmail} />
            ) : (
                <VerifyForm handleVerify={handleVerify}  />
            )}
        </>
    );
}

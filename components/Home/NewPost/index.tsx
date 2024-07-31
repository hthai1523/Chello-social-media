'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, X } from 'lucide-react';
import { routes } from '@/constant';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';

type PostType = 'imagepost' | 'videoPost' | 'record' | 'default';

interface NewPostProps {
    typePost: PostType;
}

const NewPost: React.FC<NewPostProps> = ({ typePost }) => {
    const [textareaContent, setTextareaContent] = useState<string>('');
    const [images, setImages] = useState<string[]>([]);
    const [video, setVideo] = useState<string | null>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const { toast } = useToast();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>, isVideo: boolean) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    if (isVideo) {
                        setVideo(reader.result);
                    } else {
                        setImages((prev) => [...prev, reader.result as string]);
                    }
                }
            };
            reader.onerror = handleMediaError;
            reader.readAsDataURL(file);
        }
    };

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaContent(event.target.value);
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    };

    const handleMediaError = () => {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your media.',
        });
    };

    const renderMediaInput = () => {
        switch (typePost) {
            case 'imagepost':
                return (
                    <div className="grid grid-cols-4 gap-2 gap-x-3 w-full relative">
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full h-32">
                                <Image
                                    src={image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={`post image ${index}`}
                                    className="rounded"
                                    onError={handleMediaError}
                                />
                                <Button
                                    size="icon"
                                    className="bg-[#d9d9d9] rounded-full text-center absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]"
                                    onClick={() => setImages((prev) => prev.filter((_, i) => i !== index))}
                                >
                                    <X color="#b6acac" size={12} />
                                </Button>
                            </div>
                        ))}
                        <MediaInputLabel onChange={(e) => handleFileChange(e, false)} tooltip="Add new photo" />
                    </div>
                );
            case 'videoPost':
                return (
                    <div className=" w-full relative">
                        {video && (
                            <div className="relative w-full h-[460px]">
                                <video
                                    src={video}
                                    className="w-full h-full object-cover rounded"
                                    controls
                                    onError={handleMediaError}
                                />
                                <Button
                                    size="icon"
                                    className="bg-[#d9d9d9] rounded-full text-center absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]"
                                    onClick={() => setVideo(null)}
                                >
                                    <X color="#b6acac" size={12} />
                                </Button>
                            </div>
                        )}
                        {video || <MediaInputLabel onChange={(e) => handleFileChange(e, true)} tooltip="Add new video" />}{' '}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#e4e4e4] w-full p-4 rounded space-y-3">
            {(typePost === 'imagepost' || typePost === 'videoPost') && (
                <div className="flex items-center justify-between">
                    <h3 className="inline-flex items-center gap-2 text-base font-medium text-primary-2">
                        <Image
                            src={`/icons/${typePost === 'videoPost' ? 'videoIcon.svg' : 'imageIcon.svg'}`}
                            width={20}
                            height={20}
                            alt=""
                        />
                        Post {typePost === 'videoPost' ? 'Video' : 'Image'}
                    </h3>
                    {typePost === 'imagepost' && <h3 className="text-base font-normal text-[#9a9a9a]">(Maximum 8 Photos)</h3>}
                </div>
            )}
            {typePost === 'default' && (
                <div className="bg-white w-full rounded">
                    <Textarea
                        ref={textAreaRef}
                        placeholder="Compose new post"
                        value={textareaContent}
                        onChange={handleTextAreaChange}
                    />
                    <div className="flex items-center gap-6 p-3">
                        {routes.map((route, index) => (
                            <Link key={index} href={route.path} className="cursor-pointer hover:filter hover:invert">
                                {route.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            {(typePost === 'imagepost' || typePost === 'videoPost') && (
                <div className="bg-white rounded w-full p-3 space-y-2">
                    <Input
                        placeholder={`Check out my new ${typePost === 'videoPost' ? 'Videos' : 'Photos'}`}
                        className="p-0 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {renderMediaInput()}
                </div>
            )}
            <div className="flex items-center justify-end w-full space-x-3">
                <Button variant="link">Post Later</Button>
                <Button
                    variant="default"
                    className="bg-primary-2 text-white hover:opacity-70 transition-opacity duration-300"
                >
                    Post
                </Button>
            </div>
        </div>
    );
};

interface MediaInputLabelProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    tooltip: string;
}

const MediaInputLabel: React.FC<MediaInputLabelProps> = ({ onChange, tooltip }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <label className="w-full h-32 bg-[#f2f2f2] border border-[#e4e4e4] rounded cursor-pointer flex items-center justify-center">
                    <Input type="file" className="hidden" onChange={onChange} />
                    <Button size="icon" className="bg-[#d9d9d9] rounded-full text-center">
                        <Plus color="#b6acac" size={12} />
                    </Button>
                </label>
            </TooltipTrigger>
            <TooltipContent>
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

export default NewPost;

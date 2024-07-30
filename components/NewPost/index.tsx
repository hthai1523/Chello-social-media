'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { ChartColumnBig, Hourglass, Image, Mic, Radio, Video } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const NewPost = () => {
    const [textareaContent, setTextareaContent] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    setImageSrc(reader.result);
                    setTextareaContent((prevContent) => `${prevContent}\n![Image](${reader.result})`);
                    if (textAreaRef.current) {
                        textAreaRef.current.style.height = 'auto'; // Reset height
                        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height to scrollHeight
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaContent(event.target.value);

        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'; // Reset height
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height to scrollHeight
        }
    };

    return (
        <div className="bg-[#e4e4e4] w-full p-4 rounded space-y-3">
            <div className="bg-white rounded ">
                <Textarea
                    ref={textAreaRef}
                    className=""
                    placeholder="Compose new post"
                    value={textareaContent}
                    onChange={(e) => handleTextAreaChange(e)}
                />

                <div className="flex items-center gap-6 p-3">
                    <label className="cursor-pointer hover:filter hover:invert">
                        <Input type="file" className="hidden" onChange={handleFileChange} />
                        <Image size={20} className="" color="#a8a8a8" />
                    </label>
                    <label className="cursor-pointer hover:filter hover:invert">
                        <Video size={20} className="" color="#a8a8a8" />
                    </label>
                    <label className="cursor-pointer hover:filter hover:invert">
                        <Mic size={20} className="" color="#a8a8a8" />
                    </label>
                    <label className="cursor-pointer hover:filter hover:invert">
                        <ChartColumnBig size={20} className="" color="#a8a8a8" />
                    </label>
                    <label className="cursor-pointer hover:filter hover:invert">
                        <Hourglass size={20} className="" color="#a8a8a8" />
                    </label>
                    <label className="cursor-pointer hover:filter hover:invert">
                        <Radio size={20} className="" color="#a8a8a8" />
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-end w-full space-x-3">
                <Button variant={'link'}>Post Later</Button>
                <Button
                    variant={'default'}
                    className="bg-primary-2 text-white hover:opacity-70 transition-opacity duration-300"
                >
                    Post
                </Button>
            </div>
        </div>
    );
};

export default NewPost;

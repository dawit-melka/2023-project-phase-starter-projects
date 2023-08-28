import { Blog } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import Chip from '../Chip';
import Link from 'next/link'
import { AiFillClockCircle } from 'react-icons/ai'

const SingleBlogCard: React.FC<Blog> = ({
    author,
    image,
    createdAt,
    title,
    tags,
}) => {
    const inputString = createdAt;
    // Parse the input string into a Date object
    const parsedDate = new Date(inputString as string);

    // Days of the week and months arrays
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Get day of the week, month, day, and year
    const dayOfWeek = daysOfWeek[parsedDate.getUTCDay()];
    const month = months[parsedDate.getUTCMonth()];
    const day = parsedDate.getUTCDate();
    const year = parsedDate.getUTCFullYear();

    // Format the date into the desired output format
    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;
    return (
        <div
            className='space-y-4 relative bg-white overflow-hidden shadow-lg rounded-md my-4 mx-3'>
            <Image
                className='w-full h-48 object-cover'
                src={image}
                alt={title}
                width={300}
                height={200}
            />
            <div
                className='p-3 space-y-4'>
                <div
                    className='flex items-center space-x-4 text-sm'>
                    <Image
                        src={author?.image ? author.image : ""}
                        alt={author?.name + ' picture'}
                        width={40}
                        height={40}
                        className='rounded-full'
                    />
                    <span> by {author?.name}</span>
                    <span>{formattedDate}</span>
                    </div>
                <div
                    className='flex flex-wrap w-full items-start text-center !mb-12'>
                    {tags.map((tag, i) => {
                        return (
                            <p
                                className='block m-2 rounded-full py-1 px-3 bg-gray-100'>{tag}</p>
                        )

                    })}
                </div>

                
                <div
                    className='absolute bottom-0 left-0 w-full p-4 mx-auto flex flex-wrap justify-between font-semibold'>
                    <hr className='w-full mb-4' />
                    <span
                        className='text-[#FF9F43]'>
                        <AiFillClockCircle className='inline-block mr-1' />
                        Pending
                    </span>
                    <Link
                        className='text-[#7367F0]'
                        href='#'>

                        Read More
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default SingleBlogCard;

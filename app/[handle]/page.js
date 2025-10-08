import React from 'react'
import Link from 'next/link'
import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';

const Handle = async ({ params }) => {
    params = await params;
    const handle = params.handle;
    const client = await clientPromise;
    const db = await client.db('linkforest');
    const collection = await db.collection("trees");
    const result = await collection.findOne({ handle: handle });

    if (result) {
        return (
            <div className='bg-gray-300 min-h-screen py-10'>
                <div className="main mx-auto w-2/5 pb-10 bg-white min-h-1/2 rounded-2xl">
                    <div className='w-full flex justify-between items-center p-6'>
                        <svg fill="none" height="18px" width="18px" viewBox="0 0 28 28" className="animation_rotate__SBERF"><path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z" fill="black"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 256 256"><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path></svg>
                    </div>
                    <div className='w-full flex items-center flex-col my-2'>
                        <img src={result?.profile || '/'} alt="profile" className='w-28 h-28 rounded-full object-cover' />
                        <h2 className='font-semibold text-2xl '>{result.handle}</h2>
                        <p className='font-semibold'>{result.desc}</p>
                    </div>
                    <ul className='mt-6'>
                        {result.links && result.links.map((item, index) => {
                            return <li key={index} className='mx-6 my-2'><Link href={item.address} target='_blank' ><button className='bg-purple-400 font-bold hover:text-blue-500 cursor-pointer text-center rounded-xl py-4 w-full'>{item.name}</button></Link></li>
                        })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    else {
        notFound();
    }
}

export async function generateMetadata({ params }) {
    params = await params;
    const handle = params.handle;
    return {
        title: `${handle} | LinkForest`
    }
}


export default Handle

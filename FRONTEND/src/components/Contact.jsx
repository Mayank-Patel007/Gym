import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import bgimg from '../assets/contactbgimg.jpg';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:4000/send/mail',
                {
                    name,
                    email,
                    message,
                },
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            setName('');
            setEmail('');
            setMessage('');
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className='relative bg-gray-900 py-10 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgimg})` }} >
            <div className='absolute inset-0 bg-black opacity-50' style={{ pointerEvents: 'none' }}></div>
            <form onSubmit={sendMail} className='relative max-w-md mx-auto mt-10 p-4 bg-gray-800 shadow-md rounded-md'>
                <h2 className='text-2xl font-bold text-white text-center mb-4'>Contact Us</h2>
                <div className='mb-4'>
                    <label className='block text-gray-500 font-bold mb-2'>Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-3 py-2 border bg-slate-200 rounded-md focus:outline-none focus:border-blue-500'
                        placeholder='Enter your name'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-500 font-bold mb-2'>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-3 py-2 border bg-slate-200 rounded-md focus:outline-none focus:border-blue-500'
                        placeholder='Enter your email'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-500 font-bold mb-2'>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full px-3 py-2 border bg-slate-200 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none'
                        placeholder='Enter your message'
                        required
                    ></textarea>
                </div>
                <button
                    type='submit'
                    disabled={loading}
                    className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? <ClipLoader size={20} color={'#ffffff'} loading={loading} /> : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default Contact;

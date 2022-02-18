import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import send from '../public/send.svg';
import api from './api';

const Home: NextPage = () => {

    const [textToSend, setTextToSend] = useState('');
    const [textReceived, setTextReceived] = useState('');

    const submitText = (e: object) => {
        e.preventDefault();

        fetch(`${api}/translate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({ text: textToSend })
        });
    };

    useEffect(async () => {    
        const response: object = await fetch(`${api}/en-random`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
        })

        const data: object = await response.json();

        setTextReceived(data.text); 

    }, []);

    return (
        <>
            <Head>
                <title>English Type</title>
                <meta name="description" content="Page to practice writing in English" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>English Type</h1>

                <p className="description">Page to practice writing in English</p>

                <div className="content">
                    <section className="left-side_text">
                        <p>
                            {textReceived}
                        </p>
                    </section>

                    <section className="right-side_text">
                        <form onSubmit={submitText} method="POST">
                            <textarea 
                                rows="15" 
                                name="text" 
                                placeholder="Write here..."
                                onChange={(e) => setTextToSend(e.target.value)}></textarea>
        
                            <button type="submit">
                                <img src="./arrow.svg" />
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        
            <footer>
                <p>Created by Ian Patrick &#128039;</p>
            </footer>
        </>
    )
}

export default Home

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                    </section>

                    <section className="right-side_text">
                        <form method="POST">
                            <textarea rows="15" name="text" placeholder="Write here..."></textarea>
                            <button type="submit">Send</button>
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

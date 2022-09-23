import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewpoint'
                content=' width=device-width,
                initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel='icon' href='/favicon.ico' />
            <title> {title} </title>
        </Head>
    )
}
Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'Web dev programming, programming language',
    description: 'Get the Latest Web dev News here'
}

export default Meta
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from './lib/gtag'

export default class MyDocument extends Document {
    render() {
        return (
           <Html>
            <Head>
                <script
                async src={'https://www.googletagmanager.com/gtag/js?id=G-PL2KSRFC4L'} 
                />
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-PL2KSRFC4L');
                </script>

            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
           </Html >
        )
}
}
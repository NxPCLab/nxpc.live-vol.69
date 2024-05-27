import Head from 'next/head'
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

import siteImg from 'images/mainVisual.png'

export default function Meta() {
    const img = siteImg.src
    const imgW = siteImg.width
    const imgH = siteImg.height
    const imgUrl = siteUrl

    return (
        <Head>
            <title>{siteTitle}</title>
            <meta property='og:title' content={siteTitle} />

            <meta name="description" content={siteDesc} />
            <meta property="og:description" content={siteDesc} />

            <link rel="canonical" href={siteUrl} />
            <meta property="og:url" content={siteUrl} />

            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />

            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:Height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}
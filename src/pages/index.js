import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Use prebuilt payment page',
    description: 'Securely collect payments with MONEI Hosted payment page.',
    url: '/docs/use-prebuilt-payment-page'
  },
  {
    title: 'Accept a card payment',
    description:
      'Use MONEI UI components to build a checkout form to get paid with multiple payment methods like Credit Cards, PayPal, Bizum, ApplePay...',
    url: '/docs/accept-card-payment'
  },
  {
    title: 'Integrate with e-commerce',
    description:
      'Easily integrate MONEI with Shopify, WooCommerce and other popular e-commerce platforms.',
    url: '/docs/#integrate-with-your-e-commerce-platform'
  }
];

function Feature({imageUrl, title, description, url}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>
        <Link to={url}>{title}</Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline, title} = siteConfig;
  return (
    <Layout>
      <Head>
        <meta property="og:description" content={tagline} />
        {/* Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content="/img/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image:alt" content={tagline} />

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/preview.png" />
        <meta name="twitter:description" content={tagline} />
        <meta name="twitter:image:alt" content={tagline} />
      </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Documentation</h1>
          <p className="hero__subtitle">{tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

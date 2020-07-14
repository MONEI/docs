import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Use prebuild payment page',
    description: 'Securely collect payments with MONEI Hosted payment page.',
    url: '/docs/use-prebuild-payment-page'
  },
  {
    title: 'Accept a card payment',
    description: 'Use MONEI UI components to build a checkout form and charge the card.',
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
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Documentation</h1>
          <p className="hero__subtitle">
            Explore our guides and examples to integrate MONEI
          </p>
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

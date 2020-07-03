import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Insanely Simple</>,
    description: (
      <>
        We designed MONEI in a way that anyone can use it. Today you, tomorrow your 6 years old
        child on their way to conquer the business world. Few clicks here and there and that's all
        there is to it.
      </>
    )
  },
  {
    title: <>Your Money is Your Own</>,
    description: (
      <>
        When we first used payment gateways, we were shocked to see how long you need to wait to get
        your hard earn money. It takes you time to get the business going and to start earning the
        money and you should wait for one or two weeks more to receive it? Preposterous!
      </>
    )
  },
  {
    title: <>Developers (You're) Welcome</>,
    description: (
      <>
        Integrate MONEI anywhere. With just a few simple lines of code you'll be ready to start
        selling. No more hiring expensive developers, maintaining servers and all that nonsense. We
        firmly believe that simplicity is the key. With our dev documentation and integration
        guides, you'll be ready in no-time!
      </>
    )
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Documentation</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--secondary button--lg', styles.getStarted)}
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

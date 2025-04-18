import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Use",
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        These modules are written in Python 3. The syntax and code structure is
        easy to use and extend.
      </>
    ),
  },
  {
    title: "Python and Open source",
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        All the modules are available under MIT License and free of charge to
        use, modify, and extend. Visit the{" "}
        <a href="https://github.com/pranabdas/suvtools/">Github repository</a>.
      </>
    ),
  },
  {
    title: "Download or use Webapp",
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Download and install the Python package from{" "}
        <a href="https://pypi.org/project/suvtools/">PyPI</a>, or use the{" "}
        <a href="https://suv.netlify.app">webapp</a> if you only need to export
        data columns to plaintext format.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={"Welcome"}
      description="Python libraries to analyze and visualize SSLS SUV beamline data<head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
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

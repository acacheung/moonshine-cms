import React from 'react';
import { Helmet } from 'react-helmet';
import './all.scss';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <link
          href='https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap'
          rel='stylesheet'
        ></link>
        {/* <script src='https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js' data-chownow-company-id='25650' /> */}
      </Helmet>
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;

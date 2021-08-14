import React from 'react';

type MetaData = {
  title?: string
  metaDesc?: string
  metaKeywords?: string,
  canonical?: string
}

const Header = (data: MetaData) => {
  return (
    <React.Fragment>
      <head>
        <title>{data.title}</title>

        <meta name="description" content={data.metaDesc} />
        <meta name="keywords" content={data.metaKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="canonical" href={data.canonical} />
      </head>
    </React.Fragment>
  );
}

export default Header;

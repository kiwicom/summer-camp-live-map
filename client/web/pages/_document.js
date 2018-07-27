// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native-web';
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: Document) {
    AppRegistry.registerComponent('Main', () => Main);
    const { stylesheet } = AppRegistry.getApplication('Main');
    const page = renderPage();
    const styles = <style dangerouslySetInnerHTML={{ __html: undefined }} />;
    return { ...page, styles };
  }

  render() {
    // Need to link the antd library like this because Next.js does not support
    // importing raw CSS files.
    return (
      <html lang='en'>
        <Head>
          <title>My page</title>
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/antd/3.7.1/antd.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

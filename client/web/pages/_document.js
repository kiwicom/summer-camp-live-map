// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native'; // eslint-disable-line

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    AppRegistry.registerComponent('Main', () => Main);
    const { stylesheet } = AppRegistry.getApplication('Main');
    const page = renderPage();
    const styles = <style dangerouslySetInnerHTML={{ __html: stylesheet }} />;
    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

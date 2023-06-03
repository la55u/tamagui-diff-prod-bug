import '@tamagui/core/reset.css';
import type { AppProps } from 'next/app';
import 'raf/polyfill';
import { Suspense } from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';
import { TamaguiProvider } from 'ui';
import config from 'tamagui.config';

// include the build-time generated CSS file
if (process.env.NODE_ENV === 'production') {
  console.log('require tamagui.css');
  require('../../public/tamagui.css');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TamaguiProvider config={config} defaultTheme="light" disableInjectCSS>
      <Suspense fallback={<p>Loading...</p>}>
        <Component {...pageProps} />
      </Suspense>
    </TamaguiProvider>
  );
}

export default MyApp;

import "../styles/globals.css"; //global styling은 반드시 pages/_app.js 안에 import 해야한다.

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

//_app.js 파일 생성후 development server 를 restart 해줘야한다. npm run dev

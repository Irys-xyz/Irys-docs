import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

function MyApp({ Component, pageProps }: {
    Component: React.ComponentType,
    pageProps: any
}) {
    return <Component {...pageProps} />
}

export default MyApp
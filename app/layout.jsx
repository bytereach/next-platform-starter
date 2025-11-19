import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Bytereach Marketing Media',
        default: 'Bytereach Marketing Media - Your Success Partner'
    },
    description: 'A results-focused digital marketing agency delivering growth through strategy, creativity & performance. Specializing in web development, Meta ads, Google ads, SEO, and more.',
    keywords: 'digital marketing, web development, Meta ads, Google ads, SEO, social media marketing, video editing, graphic design'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

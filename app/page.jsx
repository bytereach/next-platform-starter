import { Hero } from 'components/hero';
import { About } from 'components/about';
import { Services } from 'components/services';
import { Portfolio } from 'components/portfolio';
import { Results } from 'components/results';
import { Testimonials } from 'components/testimonials';
import { Contact } from 'components/contact';
import { WhatsAppButton } from 'components/whatsapp-button';

export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Results />
            <Testimonials />
            <Contact />
            <WhatsAppButton />
        </>
    );
}

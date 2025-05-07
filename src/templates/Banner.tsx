import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Il n'existe pas encore un moyen plus facile de vendre que Ça"
      subtitle="Telecharger et commencer à vendre"
      button={
        <Link href="https://www.dropbox.com/scl/fi/hibhh4kchnkqskpt42thg/application-deelz-v.7-05.apk?rlkey=nm0nk06pjb1fnpf1qby4zrlxs&st=if34iqmp&dl=1">
          <Button>Telecharger</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

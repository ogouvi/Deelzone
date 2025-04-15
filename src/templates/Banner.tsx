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
        <Link href="https://expo.dev/artifacts/eas/vmRJ1Dt1CTbeGj8w2136Ve.apk">
          <Button>Telecharger</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

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
        <Link href="https://www.dropbox.com/scl/fi/53zbf8cmb9o9a73w9v0sl/application-deelz-v0.1.apk?rlkey=5hbiwzf41gxv4yvlvmaqzi2i8&st=5h0y0w6e&dl=1">
          <Button>Telecharger</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

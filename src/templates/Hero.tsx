import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-purple-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="flex flex-row gap-1">
          <Image
            src="/assets/images/whatsapp.png"
            alt="whatsapp icon"
            width={28}
            height={20}
          />
          <a
            href="whatsapp://send?text=J'ai trouvé la meilleure app pour vendre en ligne, je ne peux garder ce secret pour moi seul!🤝🤝  voici le lien https://expo.dev/artifacts/eas/8E4gTjrsgtvTd2wZWk6bzj.apk"
            target="_blank"
            rel="noreferrer"
          >
            Partager l&apos;App
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'La nouvelle plateforme de revente pour \n'}
            <span className="text-4xl text-[#6f3090]">
              Particuliers comme Business
            </span>
          </>
        }
        description="Le moyen le plus simple possible pour vendre vos articles en quelques clicks! 🤷🏾‍♂️🤷🏾‍♂️🤷🏾‍♂️ ."
        button={
          <Link href="https://expo.dev/artifacts/eas/8E4gTjrsgtvTd2wZWk6bzj.apk">
            <Button xl>⬇️Installer Maintenant 🫵</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

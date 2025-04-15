import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Nos Sponsors"
    description="Le soutien exceptionnel de nos sponsors a rendu ce projet possible."
  >
    <div className="flex-col-2 flex flex-wrap items-center justify-center gap-5 md:flex-row">
      <div>
        <a
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          <Image
            src="/assets/images/sentry-dark.png"
            alt="Sentry"
            width={160}
            height={124}
            className="filter-green"
          />
        </a>
      </div>
      <div>
        <a
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          <Image
            src="/assets/images/sentry-dark.png"
            alt="Sentry"
            width={160}
            height={124}
            className="filter-green"
          />
        </a>
      </div>
      <div>
        <a
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          <Image
            src="/assets/images/sentry-dark.png"
            alt="Sentry"
            width={160}
            height={124}
            className="filter-green"
          />
        </a>
      </div>
      <div>
        <a
          href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          <Image
            src="/assets/images/sentry-dark.png"
            alt="Sentry"
            width={160}
            height={124}
            className="filter-green"
          />
        </a>
      </div>
    </div>
  </Section>
);

export { Sponsors };

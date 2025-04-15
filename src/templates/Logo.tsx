import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '55' : '50';
  const fontStyle = props.xl ? 'font-extrabold text-4xl' : 'font-bold text-2xl';

  return (
    <span className={`inline-flex items-center text-[#6f3090] ${fontStyle}`}>
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        width={parseInt(size, 10)}
        height={parseInt(size, 10)}
        className="mr-2"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

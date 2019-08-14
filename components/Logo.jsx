import React, { useContext } from 'react';
import Link from 'next/link';
import theme from '../theme';
import { Context } from '../helpers/context';

const Logo = () => {
  const { ext } = useContext(Context);

  return (
    <Link href="/">
      <a className="logo">
        <img src={`/static/images/logo.${ext}`} alt="kyoden" />
        <style jsx>
          {`
            .logo {
              left: 10%;
              position: absolute;
              top: 3em;
            }

            .logo img {
              width: 50px;
              height: 50px;
            }

            @media (max-width: ${theme.media.screenSpMin}) {
              .logo {
                left: 5%;
                top: 1.5em;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
};

export default Logo;

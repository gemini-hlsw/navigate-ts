import './Navbar.css';

import { useConfiguration } from '@gql/configs/Configuration';
import { clsx } from 'clsx';
import { Button } from 'primereact/button';
import type { MenuItem } from 'primereact/menuitem';
import { SplitButton } from 'primereact/splitbutton';
import { Link } from 'react-router';

import { useNavigateToLogin, useSignout } from '@/auth/hooks';
import { displayName } from '@/auth/user';
import { useSetAboutVisible } from '@/components/atoms/about';
import { useAlarmValue } from '@/components/atoms/alarm';
import { useIsLoggedIn, useUser } from '@/components/atoms/auth';
import { useServerConfigValue } from '@/components/atoms/config';
import { useTheme } from '@/components/atoms/theme';
import { ChevronDown, Info, Map, Moon, SignIn, SignOut, Sun, User } from '@/components/Icons';

import { ConnectionLost } from './ConnectionLost';

export default function Navbar() {
  const configuration = useConfiguration().data?.configuration;
  const [theme, toggleTheme] = useTheme();
  const user = useUser();
  const isLoggedIn = useIsLoggedIn();
  const { site } = useServerConfigValue();

  const signout = useSignout();
  const toggleAboutVisible = useSetAboutVisible();
  const navigateToSignIn = useNavigateToLogin();

  const alarm = useAlarmValue();

  const ThemeIcon = theme === 'dark' ? Moon : Sun;
  const SignInIcon = isLoggedIn ? SignIn : SignOut;

  const userSession = () => {
    if (isLoggedIn) {
      return signout();
    } else {
      return navigateToSignIn();
    }
  };

  const items: MenuItem[] = [
    {
      label: 'Switch theme',
      icon: <ThemeIcon className="p-menuitem-icon" />,
      command: toggleTheme,
    },
    {
      label: isLoggedIn ? 'Logout' : 'Login',
      icon: <SignInIcon className="p-menuitem-icon" />,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      command: userSession,
    },
    {
      label: 'About',
      icon: <Info className="p-menuitem-icon" />,
      command: () => toggleAboutVisible(),
    },
  ];

  return (
    <nav className={clsx('top-bar', alarm && 'animate-error-bg')}>
      <div className="left">
        <Link to="/">
          <Button
            icon={<Map className="p-button-icon" size="lg" />}
            iconPos="left"
            className="p-button-text nav-btn main-title"
          >
            <span>N</span>
            <span>A</span>
            <span>V</span>
            <span>I</span>
            <span>G</span>
            <span>A</span>
            <span>T</span>
            <span>E</span>
          </Button>
        </Link>
        {site && <span className="site">{site}</span>}
      </div>
      <div className="center">
        {configuration?.obsTitle && <span className="observation">{configuration.obsTitle}</span>}
        {configuration?.obsReference && <span className="observation-ref">{configuration.obsReference}</span>}
      </div>
      <div>
        <ConnectionLost />

        <SplitButton
          label={user ? displayName(user) : 'Login'}
          icon={<User size="lg" />}
          className="p-button-text nav-btn"
          buttonClassName={clsx(!user && 'menu-button-not-logged-in')}
          model={items}
          onClick={() => (!user ? navigateToSignIn() : undefined)}
          dropdownIcon={<ChevronDown size="lg" />}
        ></SplitButton>
      </div>
    </nav>
  );
}

import {
  faCamera,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faFloppyDisk,
  faGear,
  faKey,
  faList,
  faMagnifyingGlass,
  faMap,
  faPlay,
  faRotateRight,
  faStop,
  faUser,
  faVolume,
  faVolumeSlash,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import type { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import {
  faInfoCircle,
  faKey as faKeySolid,
  faLocationCrosshairs,
  faLocationCrosshairsSlash,
  faMoon,
  faRightFromBracket,
  faRightToBracket,
  faSquareParking,
  faSquareParkingSlash,
  faSun,
} from '@fortawesome/pro-solid-svg-icons';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconFactory = (icon: IconDefinition) => {
  const renderFontAwesomeIcon = (props: Omit<FontAwesomeIconProps, 'icon'>) => (
    <FontAwesomeIcon {...props} icon={icon} />
  );
  renderFontAwesomeIcon.displayName = icon.iconName;
  return renderFontAwesomeIcon;
};

export const Camera = iconFactory(faCamera);
export const CaretDown = iconFactory(faCaretDown);
export const CaretLeft = iconFactory(faCaretLeft);
export const CaretRight = iconFactory(faCaretRight);
export const CaretUp = iconFactory(faCaretUp);
export const Check = iconFactory(faCheck);
export const ChevronDown = iconFactory(faChevronDown);
export const ChevronLeft = iconFactory(faChevronLeft);
export const ChevronRight = iconFactory(faChevronRight);
export const ChevronUp = iconFactory(faChevronUp);
export const Crosshairs = iconFactory(faLocationCrosshairs);
export const CrosshairsSlash = iconFactory(faLocationCrosshairsSlash);
export const FloppyDisk = iconFactory(faFloppyDisk);
export const Gear = iconFactory(faGear);
export const Info = iconFactory(faInfoCircle);
export const Key = iconFactory(faKey);
export const KeySolid = iconFactory(faKeySolid);
export const List = iconFactory(faList);
export const Map = iconFactory(faMap);
export const Moon = iconFactory(faMoon);
export const Parking = iconFactory(faSquareParking);
export const ParkingSlash = iconFactory(faSquareParkingSlash);
export const Play = iconFactory(faPlay);
export const RotateRight = iconFactory(faRotateRight);
export const Search = iconFactory(faMagnifyingGlass);
export const SignIn = iconFactory(faRightToBracket);
export const SignOut = iconFactory(faRightFromBracket);
export const Stop = iconFactory(faStop);
export const Sun = iconFactory(faSun);
export const User = iconFactory(faUser);
export const Volume = iconFactory(faVolume);
export const VolumeSlash = iconFactory(faVolumeSlash);
export const XMark = iconFactory(faXmark);

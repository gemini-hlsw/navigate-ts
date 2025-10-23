import type { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import {
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleCheck,
  faCircleXmark,
  faClockRotateLeft,
  faFloppyDisk,
  faGear,
  faInfoCircle,
  faList,
  faLocationCrosshairs,
  faLocationCrosshairsSlash,
  faMagnifyingGlass,
  faMap,
  faMoon,
  faPlay,
  faRightFromBracket,
  faRightToBracket,
  faRotateRight,
  faSliders,
  faSquareParking,
  faSquareParkingSlash,
  faStop,
  faSun,
  faTrashXmark,
  faTriangleExclamation,
  faUser,
  faUserAstronaut,
  faVolume,
  faVolumeSlash,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const kebabToPascalCase = (str: string) =>
  str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const iconFactory = (icon: IconDefinition) =>
  Object.assign(
    (props: Omit<FontAwesomeIconProps, 'icon'>) => {
      'use memo';
      return <FontAwesomeIcon {...props} icon={icon} />;
    },
    { displayName: kebabToPascalCase(icon.iconName) + 'Icon' },
  );

export const Astronaut = iconFactory(faUserAstronaut);
export const CaretDown = iconFactory(faCaretDown);
export const CaretLeft = iconFactory(faCaretLeft);
export const CaretRight = iconFactory(faCaretRight);
export const CaretUp = iconFactory(faCaretUp);
export const Check = iconFactory(faCheck);
export const ChevronDown = iconFactory(faChevronDown);
export const ChevronLeft = iconFactory(faChevronLeft);
export const ChevronRight = iconFactory(faChevronRight);
export const ChevronUp = iconFactory(faChevronUp);
export const CircleCheck = iconFactory(faCircleCheck);
export const CircleXMark = iconFactory(faCircleXmark);
export const ClockRotateLeft = iconFactory(faClockRotateLeft);
export const Crosshairs = iconFactory(faLocationCrosshairs);
export const CrosshairsSlash = iconFactory(faLocationCrosshairsSlash);
export const FloppyDisk = iconFactory(faFloppyDisk);
export const Gear = iconFactory(faGear);
export const Info = iconFactory(faInfoCircle);
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
export const Sliders = iconFactory(faSliders);
export const Stop = iconFactory(faStop);
export const Sun = iconFactory(faSun);
export const Trash = iconFactory(faTrashXmark);
export const TriangleExclamation = iconFactory(faTriangleExclamation);
export const User = iconFactory(faUser);
export const Volume = iconFactory(faVolume);
export const VolumeSlash = iconFactory(faVolumeSlash);
export const XMark = iconFactory(faXmark);

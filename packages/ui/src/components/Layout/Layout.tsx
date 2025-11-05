import './Layout.css';

import { Outlet } from 'react-router';

import { useAcquisitionAdjustmentToast } from './AcquisitionAdjustmentToast';
import { useAlarmAudio } from './AlarmAudio';
import Navbar from './Navbar/Navbar';

export default function Layout() {
  useAlarmAudio();
  useAcquisitionAdjustmentToast();
  return (
    <div className="layout">
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

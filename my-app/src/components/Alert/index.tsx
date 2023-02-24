import React from 'react';
import toast from 'react-hot-toast';
import { CheckCircleIcon, InfoOutlineIcon } from '@chakra-ui/icons';

const Alert = (status: 'success' | 'critical', wording: string) => {
  toast(wording, {
    duration: 3000,
    style: {
      backgroundColor: mapColorBgAlert[status],
      color: mapColorAlert[status],
      borderRadius: '1.25rem',
      fontWeight: 600,
      fontSize: '0.875rem',
      padding: '.6875rem',
      maxWidth: '30rem',
    },
    icon: iconAlert[status],
  });
};

export default Alert;

const mapColorBgAlert = {
  success: '#FEFEFE',
  critical: '#FAEAEA',
};

const mapColorAlert = {
  success: '#2D7738',
  critical: '#970C0C',
};

const iconAlert = {
  success: <CheckCircleIcon width={19} h={19} />,
  critical: <InfoOutlineIcon w={19} h={19} />,
};

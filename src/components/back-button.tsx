import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IBackButtonProps {
  link: string;
  text: string;
}

export const BackButton: FC<IBackButtonProps> = ({ link, text }) => (
  <Button
    startIcon={<ArrowBack />}
    component={Link}
    to={link}
    style={{ verticalAlign: 'middle', fontSize: 16, lineHeight: '1px' }}
  >
    {text}
  </Button>
);

import { Box, styled } from '@mui/material';
import Title from './Title';

type SectionProps = {
  title: string;
  side?: 'left' | 'right';
  children: React.ReactNode;
};

const SectionContent = styled('div')({
  paddingLeft: '20px',
});

const Section: React.FC<SectionProps> = ({ title, side, children }) => {
  return (
    <Box style={{}}>
      <Title label={title} side={side} />
      <SectionContent>{children}</SectionContent>
    </Box>
  );
};

export default Section;

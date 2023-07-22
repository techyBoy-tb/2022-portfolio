import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Drawer,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';

import gareth from '../../assets/gareth2023.jpeg';
import palette from '../../theme/palette';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

interface Props {}

const drawerWidth = 250;
const SideBar: React.FC<Props> = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          m: 2,
        }}
      >
        <Avatar alt="Gareth" src={gareth} sx={{ height: 200, width: 200 }} />
        <Typography variant="h3" sx={{ textDecoration: 'underline' }}>
          Gareth Clifford
        </Typography>
        <Typography variant="h6">Full stack, mobile app developer</Typography>

        <Box
          sx={{
            width: '90%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            p: 1.5,
            m: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: '#404040',
            borderStyle: 'solid',
          }}
        >
          <Link href="#about" underline="hover">
            <Typography variant="body2">About</Typography>
          </Link>
          <Link href="#career" underline="hover">
            <Typography variant="body2">Career</Typography>
          </Link>
        </Box>
        <Box sx={{ p: 1.5, m: 1 }}>
          <Link
            href="mailto:garethclifford9519@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <EmailIcon color="action" sx={{ paddingRight: 2 }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gareth-clifford/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon color="action" sx={{ paddingRight: 2 }} />
          </Link>
          <Link
            href="https://github.com/techyBoy-tb/"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon color="action" sx={{ paddingRight: 2 }} />
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};
export default SideBar;

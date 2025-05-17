import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Phòng Chống Ma Túy
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Trang Chủ
          </Button>
          <Button color="inherit" component={Link} to="/information">
            Thông Tin
          </Button>
          <Button color="inherit" component={Link} to="/prevention">
            Phòng Ngừa
          </Button>
          <Button color="inherit" component={Link} to="/support">
            Hỗ Trợ
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Liên Hệ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 
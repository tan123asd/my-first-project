import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Về chúng tôi
            </Typography>
            <Typography variant="body2">
              Chúng tôi cam kết mang đến thông tin và hỗ trợ về phòng chống ma túy,
              giúp cộng đồng nâng cao nhận thức và bảo vệ sức khỏe.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Liên kết nhanh
            </Typography>
            <Link component={RouterLink} to="/blog" color="inherit" display="block">
              Blog
            </Link>
            <Link component={RouterLink} to="/courses" color="inherit" display="block">
              Khóa học
            </Link>
            <Link component={RouterLink} to="/assist-survey" color="inherit" display="block">
              Khảo sát ASSIST
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block">
              Liên hệ
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Thông tin liên hệ
            </Typography>
            <Typography variant="body2">
              Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM
            </Typography>
            <Typography variant="body2">
              Email: contact@drugprevention.com
            </Typography>
            <Typography variant="body2">
              Hotline: 1800-xxxx
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Phòng chống ma túy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 
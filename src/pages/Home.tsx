import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Chương Trình Phòng Chống Ma Túy Cộng Đồng
      </Typography>
      
      <Typography variant="h5" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Hành động vì một cộng đồng khỏe mạnh và an toàn
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/prevention.jpg"
              alt="Phòng ngừa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Phòng Ngừa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Các biện pháp và chiến lược phòng ngừa hiệu quả để bảo vệ cộng đồng khỏi tác hại của ma túy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/education.jpg"
              alt="Giáo dục"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Giáo Dục
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chương trình giáo dục và nâng cao nhận thức về tác hại của ma túy trong cộng đồng.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/support.jpg"
              alt="Hỗ trợ"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hỗ Trợ
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Các dịch vụ hỗ trợ và tư vấn cho người bị ảnh hưởng bởi ma túy và gia đình.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3 }}>
        Tham Gia Cùng Chúng Tôi
      </Typography>

      <Typography variant="body1" paragraph>
        Chúng tôi là một tổ chức tình nguyện hoạt động vì cộng đồng, với mục tiêu xây dựng một môi trường sống lành mạnh và an toàn cho mọi người. Thông qua các hoạt động giáo dục, tuyên truyền và hỗ trợ, chúng tôi góp phần vào công tác phòng chống ma túy tại địa phương.
      </Typography>

      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Tham Gia Ngay
      </Button>
    </Container>
  );
};

export default Home; 
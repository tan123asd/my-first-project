import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Khóa học trực tuyến',
      description: 'Các khóa học được thiết kế phù hợp cho từng đối tượng: học sinh, phụ huynh, và giáo viên.',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      path: '/courses',
    },
    {
      title: 'Khảo sát ASSIST',
      description: 'Công cụ đánh giá nguy cơ sử dụng ma túy được phát triển bởi WHO.',
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      path: '/assist-survey',
    },
    {
      title: 'Blog chia sẻ',
      description: 'Thông tin, kinh nghiệm và kiến thức về phòng chống ma túy.',
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      path: '/blog',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Phòng chống ma túy
              </Typography>
              <Typography variant="h5" paragraph>
                Hành động vì cộng đồng lành mạnh và an toàn
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/courses')}
                sx={{ mt: 2 }}
              >
                Khám phá khóa học
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.jpg"
                alt="Drug Prevention"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Dịch vụ của chúng tôi
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea onClick={() => navigate(feature.path)}>
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Box sx={{ mb: 2, color: 'primary.main' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Bạn cần hỗ trợ?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Liên hệ ngay
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 
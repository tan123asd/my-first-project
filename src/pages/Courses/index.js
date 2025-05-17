import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Tabs,
  Tab,
  Box,
  Chip
} from '@mui/material';

const courses = {
  student: [
    {
      id: 1,
      title: 'Kỹ Năng Từ Chối Ma Túy Cho Học Sinh',
      description: 'Khóa học giúp học sinh phát triển kỹ năng từ chối và đối phó với áp lực từ bạn bè.',
      image: '/images/courses/student1.jpg',
      duration: '4 tuần',
      level: 'Cơ bản'
    },
    {
      id: 2,
      title: 'Nhận Thức Về Tác Hại Ma Túy',
      description: 'Tìm hiểu về các loại ma túy phổ biến và tác hại của chúng đối với sức khỏe.',
      image: '/images/courses/student2.jpg',
      duration: '3 tuần',
      level: 'Cơ bản'
    }
  ],
  parent: [
    {
      id: 3,
      title: 'Kỹ Năng Phát Hiện Sớm Dấu Hiệu Sử Dụng Ma Túy',
      description: 'Hướng dẫn phụ huynh cách nhận biết các dấu hiệu bất thường ở con cái.',
      image: '/images/courses/parent1.jpg',
      duration: '2 tuần',
      level: 'Trung bình'
    }
  ],
  teacher: [
    {
      id: 4,
      title: 'Phương Pháp Giáo Dục Phòng Chống Ma Túy',
      description: 'Trang bị cho giáo viên các phương pháp giảng dạy về phòng chống ma túy hiệu quả.',
      image: '/images/courses/teacher1.jpg',
      duration: '6 tuần',
      level: 'Nâng cao'
    }
  ]
};

function Courses() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const getCoursesByTab = () => {
    switch (currentTab) {
      case 0:
        return courses.student;
      case 1:
        return courses.parent;
      case 2:
        return courses.teacher;
      default:
        return [];
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Khóa Học Trực Tuyến
      </Typography>
      
      <Typography variant="h5" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
        Các khóa học về phòng chống ma túy theo từng đối tượng
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab label="Dành cho học sinh" />
          <Tab label="Dành cho phụ huynh" />
          <Tab label="Dành cho giáo viên" />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {getCoursesByTab().map((course) => (
          <Grid item xs={12} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip label={`Thời gian: ${course.duration}`} size="small" />
                  <Chip label={`Cấp độ: ${course.level}`} size="small" />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Xem chi tiết
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Đăng ký học
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Courses; 
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

// Mock data for courses
const courses = {
  students: [
    {
      id: 1,
      title: 'Kỹ năng từ chối ma túy cho học sinh',
      description: 'Khóa học giúp học sinh phát triển kỹ năng từ chối và đối phó với áp lực từ bạn bè.',
      image: '/courses/refusal-skills.jpg',
      duration: '4 tuần',
      level: 'Cơ bản',
    },
    {
      id: 2,
      title: 'Nhận biết và phòng tránh ma túy trong trường học',
      description: 'Hướng dẫn cách nhận biết và tránh xa các loại ma túy phổ biến trong môi trường học đường.',
      image: '/courses/school-prevention.jpg',
      duration: '6 tuần',
      level: 'Trung cấp',
    },
  ],
  parents: [
    {
      id: 3,
      title: 'Kỹ năng giám sát và bảo vệ con cái',
      description: 'Hướng dẫn phụ huynh cách theo dõi và bảo vệ con khỏi nguy cơ ma túy.',
      image: '/courses/parenting-skills.jpg',
      duration: '5 tuần',
      level: 'Cơ bản',
    },
    {
      id: 4,
      title: 'Giao tiếp hiệu quả với con về vấn đề ma túy',
      description: 'Phương pháp trò chuyện và tư vấn con cái về tác hại của ma túy.',
      image: '/courses/communication.jpg',
      duration: '4 tuần',
      level: 'Trung cấp',
    },
  ],
  teachers: [
    {
      id: 5,
      title: 'Phương pháp giảng dạy phòng chống ma túy',
      description: 'Kỹ năng và phương pháp giảng dạy về phòng chống ma túy trong trường học.',
      image: '/courses/teaching-methods.jpg',
      duration: '8 tuần',
      level: 'Nâng cao',
    },
    {
      id: 6,
      title: 'Xử lý tình huống ma túy trong trường học',
      description: 'Hướng dẫn cách phát hiện và xử lý các tình huống liên quan đến ma túy trong trường học.',
      image: '/courses/situation-handling.jpg',
      duration: '6 tuần',
      level: 'Chuyên sâu',
    },
  ],
};

function Courses() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const getCoursesByCategory = () => {
    switch (currentTab) {
      case 0:
        return courses.students;
      case 1:
        return courses.parents;
      case 2:
        return courses.teachers;
      default:
        return courses.students;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Khóa học trực tuyến
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Các khóa học được thiết kế phù hợp cho từng đối tượng
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<SchoolIcon />} label="Học sinh" />
          <Tab icon={<PeopleIcon />} label="Phụ huynh" />
          <Tab icon={<PersonIcon />} label="Giáo viên" />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {getCoursesByCategory().map((course) => (
          <Grid item xs={12} md={6} key={course.id}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Thời gian: {course.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Cấp độ: {course.level}
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      Đăng ký
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Courses; 
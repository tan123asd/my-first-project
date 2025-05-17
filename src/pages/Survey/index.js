import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert
} from '@mui/material';

const assistQuestions = [
  {
    id: 1,
    question: 'Trong 3 tháng qua, bạn có thường xuyên sử dụng các chất gây nghiện không?',
    options: [
      { value: '0', label: 'Không bao giờ' },
      { value: '1', label: 'Một hoặc hai lần' },
      { value: '2', label: 'Hàng tháng' },
      { value: '3', label: 'Hàng tuần' },
      { value: '4', label: 'Hàng ngày hoặc gần như hàng ngày' }
    ]
  },
  {
    id: 2,
    question: 'Trong 3 tháng qua, bạn có thường xuyên cảm thấy thèm muốn hoặc mong muốn mạnh mẽ sử dụng các chất gây nghiện không?',
    options: [
      { value: '0', label: 'Không bao giờ' },
      { value: '1', label: 'Một hoặc hai lần' },
      { value: '2', label: 'Hàng tháng' },
      { value: '3', label: 'Hàng tuần' },
      { value: '4', label: 'Hàng ngày hoặc gần như hàng ngày' }
    ]
  },
  {
    id: 3,
    question: 'Trong 3 tháng qua, việc sử dụng các chất gây nghiện có gây ra vấn đề về sức khỏe, xã hội, pháp luật hoặc tài chính cho bạn không?',
    options: [
      { value: '0', label: 'Không bao giờ' },
      { value: '1', label: 'Một hoặc hai lần' },
      { value: '2', label: 'Hàng tháng' },
      { value: '3', label: 'Hàng tuần' },
      { value: '4', label: 'Hàng ngày hoặc gần như hàng ngày' }
    ]
  }
];

function Survey() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (activeStep === assistQuestions.length - 1) {
      calculateResult();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResult = () => {
    setShowResult(true);
    // Tính điểm và đưa ra đề xuất
  };

  const getCurrentQuestion = () => {
    return assistQuestions[activeStep];
  };

  const isAnswered = (questionId) => {
    return answers[questionId] !== undefined;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Khảo Sát Đánh Giá Nguy Cơ
      </Typography>

      <Typography variant="h5" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
        Bài khảo sát ASSIST giúp đánh giá mức độ nguy cơ sử dụng ma túy
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {assistQuestions.map((question, index) => (
            <Step key={question.id}>
              <StepLabel>Câu {index + 1}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {!showResult ? (
          <>
            <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
              <FormLabel component="legend" sx={{ mb: 2 }}>
                {getCurrentQuestion().question}
              </FormLabel>
              <RadioGroup
                value={answers[getCurrentQuestion().id] || ''}
                onChange={(e) => handleAnswerChange(getCurrentQuestion().id, e.target.value)}
              >
                {getCurrentQuestion().options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Quay lại
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!isAnswered(getCurrentQuestion().id)}
              >
                {activeStep === assistQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Alert severity="info" sx={{ mb: 2 }}>
              Dựa trên kết quả khảo sát của bạn, chúng tôi có một số đề xuất sau:
            </Alert>
            <Typography variant="body1" paragraph>
              1. Tham gia khóa học "Kỹ Năng Từ Chối Ma Túy" để trang bị thêm kiến thức và kỹ năng.
            </Typography>
            <Typography variant="body1" paragraph>
              2. Đặt lịch hẹn tư vấn với chuyên viên để được hỗ trợ chi tiết hơn.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Xem Khóa Học
            </Button>
            <Button variant="outlined" color="primary">
              Đặt Lịch Tư Vấn
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Survey; 
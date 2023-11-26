import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [capacity, setCapacity] = useState('');
  const [credits, setCredits] = useState('');
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [prerequisites, setPrerequisites] = useState([]);
  const [selectedPrerequisite, setSelectedPrerequisite] = useState('none');

  const [scheduleDay, setScheduleDay] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleBuilding, setScheduleBuilding] = useState('');
  const [scheduleRoom, setScheduleRoom] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [specializationsRes, facultiesRes, prerequisitesRes] = await Promise.all([
          axios.get('http://localhost:8080/api/v1/get_special'),
          axios.get('http://localhost:8080/api/v1/get_employee'),
          axios.get('http://localhost:8080/api/v1/get_pre'),
        ]);
        console.log(specializationsRes);
        setSpecializations(specializationsRes.data);
        setFaculties(facultiesRes.data);
        setPrerequisites(prerequisitesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      courseName,
      courseCode,
      capacity,
      credits,
      specialization: selectedSpecialization,
      term,
      year,
      facultyId: selectedFaculty,
      prerequisiteId: selectedPrerequisite === 'none' ? null : selectedPrerequisite,
      schedule: {
        day: scheduleDay,
        time: scheduleTime,
        building: scheduleBuilding,
        room: scheduleRoom,
      },
    };

    try {
      // Make a POST request to the backend to save the course
      const response = await axios.post('http://localhost:8080/api/v1/add_course', formData);

      // Handle success (e.g., redirect, show a success message)
      console.log('Course created successfully:', response.data);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error creating course:', error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Add Course</h2>
          <Form onSubmit={handleSubmit}>
            {/* Other form fields... */}
               


  <Form.Control
  as="select"
  value={selectedSpecialization}
  onChange={(e) => setSelectedSpecialization(e.target.value)}
>
  <option value="" disabled>Select specialization</option>
  {specializations.map((specialization) => (
    <option key={specialization.specializationId} value={specialization.id}>
      {specialization.name}
    </option>
  ))}
</Form.Control>





            {/* Other form fields... */}

            <Button variant="primary" type="submit">
              Add Course
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCoursePage;

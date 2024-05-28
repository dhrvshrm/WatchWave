"use client";
import { Box, Button, TextField } from "@mui/material";
import { useCoursesStore } from "../store/coursesStore";
import { useEffect } from "react";

function Index() {
  const { addCourse } = useCoursesStore();
  const { courses } = useCoursesStore((state) => state);

  const handleAddCourse = () => {
    addCourse({
      name: "Course 1",
      id: Math.floor(Math.random() * 100),
      type: "Math",
    });
  };

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  return (
    <Box>
      <TextField label="Course Name" />
      <Button variant="contained" color="primary" onClick={handleAddCourse}>
        Add Course
      </Button>
    </Box>
  );
}

export default Index;

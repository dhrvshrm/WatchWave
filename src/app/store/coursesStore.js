import create from "zustand";

export const useCoursesStore = create((set) => ({
  // Use create instead of import create
  courses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  removeCourse: (course) =>
    set((state) => ({ courses: state.courses.filter((c) => c !== course) })),
  clearCourses: () => set({ courses: [] }),

  getCourse: (id) => {
    return set((state) => state.courses.find((c) => c.id === id));
  },
  getCoursesList: () => {
    return set((state) => state.courses);
  },
}));

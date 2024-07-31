export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const gradesInsert = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradesInsert ? gradesInsert.grade : 'N/A',
    };
  });

  return updatedStudents;
}

export default function getStudentsByLocation(students, city) {
  const loc = students.filter((student) => student.location === city);
  return (loc);
}

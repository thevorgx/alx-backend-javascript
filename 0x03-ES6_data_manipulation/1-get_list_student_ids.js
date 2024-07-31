export default function getListStudentIds(arr) {
  const ids = arr.map((person) => person.id);
  if (!Array.isArray(arr)) {
    return ([]);
  }
  return (ids);
}

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const cr1 = new ClassRoom(19);
  const cr2 = new ClassRoom(20);
  const cr3 = new ClassRoom(34);
  const arrObj = [cr1, cr2, cr3];
  return (arrObj);
}

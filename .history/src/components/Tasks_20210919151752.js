const tasks = [
  {
    id: 1,
    text: "Doctor Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 4:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 2th at 4:30pm",
    reminder: false,
  },
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;

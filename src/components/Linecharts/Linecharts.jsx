import { LineChart, Line } from "recharts";

const Linecharts = () => {
    const studentMarks = [
        { "studentName": "Alice", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 79 },
        { "studentName": "Bob", "mathMarks": 85, "physicsMarks": 88, "chemistryMarks": 84 },
        { "studentName": "Charlie", "mathMarks": 92, "physicsMarks": 91, "chemistryMarks": 89 },
        { "studentName": "David", "mathMarks": 67, "physicsMarks": 72, "chemistryMarks": 70 },
        { "studentName": "Emma", "mathMarks": 74, "physicsMarks": 76, "chemistryMarks": 73 },
        { "studentName": "Frank", "mathMarks": 88, "physicsMarks": 85, "chemistryMarks": 87 },
        { "studentName": "Grace", "mathMarks": 95, "physicsMarks": 93, "chemistryMarks": 96 },
        { "studentName": "Henry", "mathMarks": 61, "physicsMarks": 65, "chemistryMarks": 63 },
        { "studentName": "Isabella", "mathMarks": 83, "physicsMarks": 80, "chemistryMarks": 82 },
        { "studentName": "Jack", "mathMarks": 90, "physicsMarks": 87, "chemistryMarks": 91 }
    ];
    

  return (
    <div className="w-11/12 mx-auto flex justify-center">
      <LineChart width={400} height={400} data={studentMarks}>
        <Line type="monotone" dataKey="mathMarks" stroke="red" />
        <Line type="monotone" dataKey="physicsMarks" stroke="blue" />
        <Line type="monotone" dataKey="chemistryMarks" stroke="blue" />
        <Line type="monotone" dataKey="chemistryMarks" stroke="green" />
      </LineChart>
    </div>
  );
};

export default Linecharts;

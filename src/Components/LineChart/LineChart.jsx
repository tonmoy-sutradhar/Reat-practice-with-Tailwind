import { AreaChart, LineChart as Lchart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const MathMark = [
    { student: "Alice", mathMark: 85, physicsMark: 78, programmingMark: 91 },
    { student: "Bob", mathMark: 78, physicsMark: 82, programmingMark: 87 },
    { student: "Charlie", mathMark: 92, physicsMark: 88, programmingMark: 93 },
    { student: "David", mathMark: 44, physicsMark: 70, programmingMark: 85 },
    { student: "Eva", mathMark: 88, physicsMark: 85, programmingMark: 90 },
    { student: "Frank", mathMark: 81, physicsMark: 79, programmingMark: 88 },
    { student: "Grace", mathMark: 85, physicsMark: 92, programmingMark: 94 },
    { student: "Hannah", mathMark: 67, physicsMark: 73, programmingMark: 72 },
    { student: "Ivan", mathMark: 80, physicsMark: 89, programmingMark: 96 },
    { student: "Jack", mathMark: 76, physicsMark: 80, programmingMark: 83 },
  ];

  return (
    <div>
      <Lchart width={800} height={400} data={MathMark}>
        <XAxis dataKey="student"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMark" stroke="#8884d8" />
        <Line dataKey="physicsMark" stroke="#ff5733" />
        <Line dataKey="programmingMark" stroke="#4cff33" />
      </Lchart>
    </div>
  );
};

export default LineChart;

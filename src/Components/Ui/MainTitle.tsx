interface IProps {
  title: string;
  color?: string;
  height?: string;
}
const MainTitle = ({ title, color = "", height = "py-11" }: IProps) => {
  return (
    <h1 className={`${height} text-center font-bold text-2xl ${color}`}>
      {title}
    </h1>
  );
};

export default MainTitle;

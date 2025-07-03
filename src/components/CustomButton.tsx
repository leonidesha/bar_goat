import "./CustomButton.css";
interface CustomButtonProps {
  text1?: string;
}
function CustomButton(props: CustomButtonProps) {
  const { text1 } = props;
  return (
    <ul>
      <li>
        <span>{text1}</span>
      </li>
    </ul>
  );
}
export default CustomButton;

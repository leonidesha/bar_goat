import "./CustomButton.css";
interface CustomButtonProps {
  text1?: string;
  text2?: string;
}
function CustomButton(props: CustomButtonProps) {
  const { text1 } = props;
  const { text2 } = props;
  return (
    <ul>
      <li>
        <span>{text1}</span>
      </li>
      <li>
        <span>{text2}</span>
      </li>
    </ul>
  );
}
export default CustomButton;

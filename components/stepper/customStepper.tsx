import { Stepper } from "react-form-stepper";

type CustomStepperProps = {
  steps: { label: string }[];
  activeStep: number;
};

const CustomStepper = ({ steps, activeStep }: CustomStepperProps) => {
  return (
    <Stepper
      steps={steps}
      activeStep={activeStep - 1} // Step index starts from 0
      className="p-0"
      stepClassName="p-0"
      styleConfig={{
        activeBgColor: "#00606e", // Set active step color to match primary color
        completedBgColor: "#013942", // Set completed step color to match primary color
        inactiveBgColor: "#ccc", // Set inactive step color
        circleFontSize: "16px", // Adjust font size inside circles
        labelFontSize: "14px", // Adjust label font size
        activeTextColor:'#ffffff',
        inactiveTextColor:'#ffffff',
        completedTextColor:'#ffffff',
        size:'2em',
        borderRadius:'50%',
        fontWeight:500,
        }}
    />
  );
};

export default CustomStepper;

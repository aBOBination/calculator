import styled from "styled-components";
import { useState } from "react";

const StyledLayout = styled.div`
  display: grid;
  justify-content: center;
  border: 1px solid black;
`;

const CalcBoby = styled.div`
  display: grid;
  padding: 5px;
  min-height: 500px;
  min-width: 300px;
  grid-template-areas:
    "display display display display"
    "clear clear pct div"
    "num7 num8 num9 mul"
    "num4 num5 num6 sub"
    "num1 num2 num3 add"
    "num0 num0 per eq";
  // gap: 5px;
  border: 1px solid green;
`;

const buttonColors = {
  blue: "hsl(208, 32%, 67%)",
  yellow: "hsl(48, 95%, 58%)",
};

const CalcButton = styled.button`
  background-color: ${({ color }) => `${color}`};
  border: lightgrey 1px solid;
  // border-radius: 16px;
  transition-duration: 0.2s;

  grid-area: ${({ area }) => `${area}`};
  :hover {
    background-color: ${({ color }) => `${color}`};
  }
  // :active {
  //   transform: translateY(1px);
  // }
`;

const Display = styled.div`
  border: 1px solid brown;
  grid-area: ${({ area }) => `${area}`};
`;
// yellow  hsl(48,95,58)
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  console.log({ displayValue });

  const handleClick = (value) => {
    console.log({ value });
  };

  const buttons = [
    {
      label: "display",
      value: displayValue || "do maths",
      component: Display,
    },
    {
      label: "num1",
      value: 1,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num2",
      value: 2,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num3",
      value: 3,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num4",
      value: 4,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num5",
      value: 5,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num6",
      value: 6,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num7",
      value: 7,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num8",
      value: 8,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num9",
      value: 9,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "num0",
      value: 0,
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "clear",
      value: "c/e",
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "pct",
      value: "%",
      component: CalcButton,
      color: buttonColors.blue,
    },
    {
      label: "div",
      value: "/",
      component: CalcButton,
      color: buttonColors.yellow,
    },
    {
      label: "mul",
      value: "x",
      component: CalcButton,
      color: buttonColors.yellow,
    },
    {
      label: "sub",
      value: "-",
      component: CalcButton,
      color: buttonColors.yellow,
    },
    {
      label: "add",
      value: "+",
      component: CalcButton,
      color: buttonColors.yellow,
    },
    {
      label: "eq",
      value: "=",
      component: CalcButton,
      color: buttonColors.yellow,
    },
    {
      label: "per",
      value: ".",
      component: CalcButton,
      color: buttonColors.blue,
    },
  ];

  return (
    <StyledLayout>
      <CalcBoby>
        {buttons.map((button) => (
          <button.component
            area={button.label}
            key={button.label}
            color={button.color}
            onClick={() => handleClick(button.value)}
          >
            {button.value}
          </button.component>
        ))}
      </CalcBoby>
    </StyledLayout>
  );
};

export default Calculator;

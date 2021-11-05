import styled from "styled-components";
import { useState } from "react";

const StyledLayout = styled.div`
  display: grid;
  justify-content: center;
`;

const CalcBody = styled.div`
  background-color: grey;
  display: grid;
  padding: 8px;
  min-height: 500px;
  min-width: 300px;
  grid-template-areas:
    "display display display display"
    "clear mp pct div"
    "num7 num8 num9 mul"
    "num4 num5 num6 sub"
    "num1 num2 num3 add"
    "num0 per del eq";
  gap: 8px;
  border-radius: 4px;
`;

const buttonColors = {
  blue: "hsl(208, 32%, 67%)",
  yellow: "hsl(48, 95%, 58%)",
};

const CalcButton = styled.button`
  background-color: ${({ color }) => `${color}`};
  border: none;
  border-radius: 50%;
  transition-duration: 0.2s;
  height: 80px;
  width: 80px;
  grid-area: ${({ area }) => `${area}`};

  :hover {
    filter: brightness(110%);
  }
  :active {
    transition-duration: 0.25s;
    border-radius: 30%;
  }
`;

const Display = styled.div`
  height: 140px;
  display: flexbox;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => `${theme.blue}`};
  border-radius: 10px;
  grid-area: ${({ area }) => `${area}`};
`;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState([]);

  const handleClick = (button) => {
    const { type, value, label, color } = button;
    if (type === "clear") setDisplayValue([]);
    else setDisplayValue([...displayValue, value]);
  };

  const buttons = [
    {
      label: "display",
      value: displayValue || "do maths",
      component: Display,
      color: buttonColors.blue,
      type: "display",
    },
    {
      label: "num1",
      value: 1,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num2",
      value: 2,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num3",
      value: 3,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num4",
      value: 4,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num5",
      value: 5,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num6",
      value: 6,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num7",
      value: 7,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num8",
      value: 8,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num9",
      value: 9,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "num0",
      value: 0,
      component: CalcButton,
      color: buttonColors.blue,
      type: "number",
    },
    {
      label: "clear",
      value: "c/e",
      component: CalcButton,
      color: buttonColors.blue,
      type: "clear",
    },
    {
      label: "mp",
      value: "\u2213",
      component: CalcButton,
      color: buttonColors.blue,
      type: "operation",
    },
    {
      label: "pct",
      value: "\u0025",
      component: CalcButton,
      color: buttonColors.blue,
      type: "operation",
    },
    {
      label: "div",
      value: "\u00f7",
      component: CalcButton,
      color: buttonColors.yellow,
      type: "operation",
    },
    {
      label: "mul",
      value: "\u00d7",
      component: CalcButton,
      color: buttonColors.yellow,
      type: "operation",
    },
    {
      label: "sub",
      value: "\u2212",
      component: CalcButton,
      color: buttonColors.yellow,
      type: "operation",
    },
    {
      label: "add",
      value: "\u002B",
      component: CalcButton,
      color: buttonColors.yellow,
      type: "operation",
    },
    {
      label: "eq",
      value: "\u003D",
      component: CalcButton,
      color: buttonColors.yellow,
      type: "operation",
    },
    {
      label: "per",
      value: ".",
      component: CalcButton,
      color: buttonColors.blue,
      type: "float",
    },
    {
      label: "del",
      // value: "\u2B88",
      value: "\u140A",
      component: CalcButton,
      color: buttonColors.blue,
      type: "operation",
    },
  ];

  return (
    <StyledLayout>
      <CalcBody>
        {buttons.map((button) => {
          const { color, label, value } = button;
          return (
            <button.component
              area={label}
              key={label}
              color={color}
              onClick={() => handleClick(button)}
            >
              {value}
            </button.component>
          );
        })}
      </CalcBody>
    </StyledLayout>
  );
};

export default Calculator;

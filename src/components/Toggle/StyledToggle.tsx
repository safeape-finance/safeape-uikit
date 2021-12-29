import styled from "styled-components";

export const Handle = styled.div<{ scale: string }>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  width: ${({ scale }) => scale === "lg" ? 32 : 18}px;
  height: ${({ scale }) => scale === "lg" ? 32 : 18}px;
  left: ${({ scale }) => scale === "lg" ? 4 : 1}px;
  top: ${({ scale }) => scale === "lg" ? 4 : 1}px;
  position: absolute;
  transition: left 200ms ease-in;
  z-index: 1;
`;

export const Input = styled.input<{ scale: string }>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - ${({ scale }) => scale === "lg" ? 36 : 19}px);
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<{ checked: boolean, scale: string }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${({ scale }) => scale === "lg" ? 40 : 20}px;
  position: relative;
  transition: background-color 200ms;
  width: ${({ scale }) => scale === "lg" ? 72 : 40}px;
`;

export default StyledToggle;

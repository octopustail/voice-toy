/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime'
import { fireEvent, render } from "@testing-library/react";
import { VoiceToy } from "./VoiceToy";

it("click Record to start recording", () => {
  const { getByText } = render(<VoiceToy />);


    expect(getByText('Record')).toBeInTheDocument();
    expect(getByText('Stop')).toBeDisabled();
});


it("change state to record when click record button", () => {
  const { getByText } = render(<VoiceToy />);
  const recordButton = getByText('Record');
  fireEvent.click(recordButton);

  expect(recordButton.textContent).toBe('Pause');
  expect(getByText('Stop')).not.toBeDisabled();
});

it("change state to pause when click pause button", () => {
  const { getByText } = render(<VoiceToy />);
  const recordButton = getByText('Record');
  fireEvent.click(recordButton);
  fireEvent.click(recordButton);
  
  expect(getByText('Record')).toBeInTheDocument();
  expect(getByText('Stop')).not.toBeDisabled();
});

it("change state to stop when click stop button", () => {
  const { getByText } = render(<VoiceToy />);
  const recordButton = getByText('Record');
  fireEvent.click(recordButton);
  const Stop = getByText('Stop');
  expect(getByText('Pause')).toBeInTheDocument();
  fireEvent.click(Stop);
  
  expect(getByText('Record')).toBeInTheDocument();
  expect(getByText('Stop')).toBeDisabled();
});



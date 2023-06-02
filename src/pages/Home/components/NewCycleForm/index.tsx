import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);

  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I work on</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggest"
        placeholder="Type a name for your project"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggest">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
      </datalist>

      <label htmlFor="minutesAmount">interval</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}

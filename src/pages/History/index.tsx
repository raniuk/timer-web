import { useContext } from "react";

import { formatDistanceToNow } from "date-fns";

import enUS from "date-fns/locale/en-US";

import { HistoryContainer, HistoryList, Status } from "./styles";

import { CyclesContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>My Tasks</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmout} minutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: enUS,
                    })}{" "}
                    months
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">complete</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">interrupted</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">in process</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

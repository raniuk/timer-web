import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
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
            <tr>
              <td>task 1</td>
              <td>20 minutes</td>
              <td>2 months</td>
              <td>
                <Status statusColor="green">complete</Status>
              </td>
            </tr>
            <tr>
              <td>task 2</td>
              <td>20 minutes</td>
              <td>2 months</td>
              <td>
                <Status statusColor="green">complete</Status>
              </td>
            </tr>
            <tr>
              <td>task 3</td>
              <td>20 minutes</td>
              <td>2 months</td>
              <td>
                <Status statusColor="yellow">progress</Status>
              </td>
            </tr>
            <tr>
              <td>task 4</td>
              <td>20 minutes</td>
              <td>2 months</td>
              <td>
                <Status statusColor="red">failed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

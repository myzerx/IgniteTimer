import { HistoryContainer, HistoryList } from './style'

export function History() {
  return (
    <HistoryContainer>
      <h1> Meu Historico </h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

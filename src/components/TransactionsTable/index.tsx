
import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        
                    <td > Desenvolvimento de WebSite </td>
                    <td className="deposit"> R$ 12.000 </td>
                    <td> Desenvolvimento </td>
                    <td> Data </td>
                       
                    </tr>
                    <tr>
                        
                        <td> Desenvolvimento de WebSite </td>
                        <td className="withdraw"> R$ 12.000 </td>
                        <td> Desenvolvimento </td>
                        <td> Data </td>
                           
                        </tr>
                        <tr>
                        
                        <td> Desenvolvimento de WebSite </td>
                        <td> R$ 12.000 </td>
                        <td> Desenvolvimento </td>
                        <td> Data </td>
                           
                        </tr>
                </tbody>
            </table>
        </Container>
    )
}
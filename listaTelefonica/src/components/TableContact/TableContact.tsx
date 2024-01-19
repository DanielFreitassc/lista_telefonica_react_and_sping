import './TableContact.css'

interface Contacts{
    nome_pessoa: string
    numero_pessoa: string
    observacao?:string
}

interface TableProps {
    contacts: Contacts[]
}

const TableContact: React.FC<TableProps> = ({contacts}) => {
  return (
    <table className='contact-table'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Numero</th>
                <th>Obs:</th>
            </tr>
        </thead>
        <tbody>
            {contacts.length > 0 ? (contacts.map((contact, index) => (
                <tr key={index}>
                    <td>{contact.nome_pessoa}</td>
                    <td>{contact.numero_pessoa}</td>
                    <td>{contact.observacao ? contact.observacao : 'Sem obs'}</td>
                </tr>
            )) 
        ) : (
            <tr>
                <td colSpan={3}>Vazia</td>
            </tr>

        )}
        </tbody>
    </table>
  )
}

export default TableContact
import './TableContact.css'

interface Contacts{
    nome: string
    num: string
    obs?:string
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
                    <td>{contact.nome}</td>
                    <td>{contact.num}</td>
                    <td>{contact.obs ? contact.obs : 'Sem obs'}</td>
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
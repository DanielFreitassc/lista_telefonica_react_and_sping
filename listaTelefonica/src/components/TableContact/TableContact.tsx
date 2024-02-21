import axios from 'axios'
import './TableContact.css'
import { FaRegTrashAlt } from "react-icons/fa";

interface Contacts{
    id: number;
    nome_pessoa: string
    numero_pessoa: string
    observacao?:string
}

interface TableProps {
    contacts: Contacts[]
}

const TableContact: React.FC<TableProps> = ({contacts}) => {

    const handleDelete = (id:number) => {
        axios.delete(`https://backend-telefonica.onrender.com/lista/${id}`)
    }

  return (
    <table className='contact-table'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Numero</th>
                <th>Obs</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {contacts.length > 0 ? (contacts.map((contact, index) => (
                <tr key={index}>
                    <td>{contact.nome_pessoa}</td>
                    <td>{contact.numero_pessoa}</td>
                    <td>{contact.observacao ? contact.observacao : 'Sem obs'}</td>
                    <td style={{cursor:'pointer'}} onClick={() => handleDelete(contact.id)}><FaRegTrashAlt /></td>
                </tr>
            )) 
        ) : (
            <tr>
                <td colSpan={4}>Vazia</td>
            </tr>

        )}
        </tbody>
    </table>
  )
}

export default TableContact
import { User } from "@/models/users"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

interface UserTableProps {
  users: User[]
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <Table variant="simple" mb={5} shadow="md" rounded="md">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Idade</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user, index) => (
          <Tr key={index}>
            <Td>{user.name}</Td>
            <Td>{user.age}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

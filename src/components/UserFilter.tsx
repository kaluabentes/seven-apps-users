import { User } from "@/models/users"
import {
  Box,
  Button,
  Flex,
  GridItem,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { useState } from "react"

interface UserFilterProps {
  onSubmit: (user: User) => void
}

export default function UserFilter({ onSubmit }: UserFilterProps) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  function handleClear() {
    setName("")
    setAge("")
    onSubmit({ name: "", age: "" })
  }

  return (
    <SimpleGrid columns={2} gap={5} mb={5}>
      <FormControl>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input
          id="name"
          type="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="age">Idade</FormLabel>
        <Input
          id="age"
          type="text"
          onChange={(event) => setAge(event.target.value)}
          value={age}
        />
      </FormControl>
      <GridItem colSpan={1}>
        <Button
          width="100%"
          onClick={() => onSubmit({ name, age })}
          colorScheme="blue"
        >
          Filtrar
        </Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Button width="100%" onClick={handleClear}>
          Limpar
        </Button>
      </GridItem>
    </SimpleGrid>
  )
}

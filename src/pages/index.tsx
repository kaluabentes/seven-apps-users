import {
  Button,
  Container,
  Flex,
  Heading,
  Skeleton,
  Spinner,
} from "@chakra-ui/react"
import { useEffect } from "react"

import useGetUsers from "@/hooks/users/useGetUsers"
import UserTable from "@/components/UserTable"
import UserFilter from "@/components/UserFilter"
import SkeletonLoader from "@/components/SkeletonLoader"

export default function Home() {
  const { getUsers, users, isLoadingUsers, setUserFilter, setTotalRows } =
    useGetUsers()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <Container pt={5} pb={5}>
      <Heading mb={5}>Lista de usuários</Heading>
      {isLoadingUsers ? (
        <SkeletonLoader />
      ) : (
        <>
          <UserFilter onSubmit={(user) => setUserFilter(user)} />
          <UserTable users={users} />
          <Button
            width="100%"
            onClick={() => setTotalRows((prev) => prev + 10)}
          >
            Carregar mais
          </Button>
        </>
      )}
    </Container>
  )
}

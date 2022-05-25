import axios from "axios"
import { useCallback, useState } from "react"
import { chunk } from "lodash"

import { User } from "@/models/users"

export default function useGetUsers() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [users, setUsers] = useState([])
  const memoizedGetUsers = useCallback(getUsers, [])
  const [userFilter, setUserFilter] = useState({
    name: "",
    age: "",
  })
  const [totalRows, setTotalRows] = useState(10)
  const paginatedUsers = chunk(filter(users, userFilter), totalRows)
  const currentUsers: User[] = paginatedUsers[0] || []

  async function getUsers() {
    try {
      setIsLoadingUsers(true)
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL!)
      setUsers(response.data.data)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setIsLoadingUsers(false)
    }
  }

  return {
    isLoadingUsers,
    users: currentUsers,
    getUsers: memoizedGetUsers,
    setUserFilter,
    setTotalRows,
  }
}

function filter(users: User[], filter: User) {
  if (filter.name && filter.age) {
    return users.filter((user) => {
      return (
        user.name === filter.name && Number(user.age) === Number(filter.age)
      )
    })
  }

  if (filter.name && !filter.age) {
    return users.filter((user) => {
      return user.name === filter.name
    })
  }

  if (!filter.name && filter.age) {
    return users.filter((user) => {
      return Number(user.age) === Number(filter.age)
    })
  }

  return users
}

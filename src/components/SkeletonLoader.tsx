import { Flex, Skeleton } from "@chakra-ui/react"

export default function SkeletonLoader() {
  return (
    <>
      <Flex mb={5} gap={5}>
        <Skeleton height="30px" width="100%" />
        <Skeleton height="30px" width="100%" />
      </Flex>
      <Flex mb={5} gap={5}>
        <Skeleton height="30px" width="100%" />
        <Skeleton height="30px" width="100%" />
      </Flex>
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="15px" width="100%" mb={5} />
      <Skeleton height="30px" width="100%" mb={5} />
    </>
  )
}

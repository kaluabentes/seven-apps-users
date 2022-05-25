export default function range(length: number) {
  return Array(length)
    .fill(null)
    .map((_, index) => index + 1)
}

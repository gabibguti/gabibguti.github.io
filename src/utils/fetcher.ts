export async function fetcher<TData>(
  input: RequestInfo,
  init?: RequestInit
): Promise<TData> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const err = new Error('An error occurred while fetching.')

    throw err
  }

  const data = await res.json().then((res) => res as TData)

  return data
}

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skEwB0w7YnyXrIu0awpd3bQVibKpCSzY8DwIZNnVJAV3TjorvTeMA3ZRkUGnQf2FPTVmEilwRgS1VcVFT6NESIK8MDNm1kkYHTPyqUAmEokQgfmOY6tCBQRbVRmCL0xcRj3izof3TYEpjJynR6ibUyHh37LZHMK2HPBpRlt4DQTCxuPQS9IT",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

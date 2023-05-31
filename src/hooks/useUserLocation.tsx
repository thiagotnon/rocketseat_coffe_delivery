import { useState, useEffect } from 'react'

export interface Location {
  city: string
  postcode: string
  state_code: string
}

interface UserLocationHook {
  location: Location | null
  error: string | null
}

export const useUserLocation = (
  latitude: number,
  longitude: number,
): UserLocationHook => {
  const [location, setLocation] = useState<Location | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getLocation = async () => {
      try {
        const url = `https://api.opencagedata.com/geocode/v1/json?key=1b59829035354be693501b26b0f498de&q=${latitude}+${longitude}&no_annotations=1`
        const response = await fetch(url)
        const data = await response.json()

        if (data.results.length > 0) {
          const { city, postcode, state_code } = data.results[0].components
          setLocation({ city, postcode, state_code })
        } else {
          setError('Coordenadas inválidas.')
        }
      } catch (error) {
        setError('Erro ao obter a localização do usuário.')
      }
    }

    getLocation()
  }, [latitude, longitude])

  return { location, error }
}

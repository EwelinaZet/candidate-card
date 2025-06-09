export interface ResponseCandidate {
  status: number
  message: string
  data: Candidate
}

export interface Candidate {
  id: string
  name: string
  surname: string
  email: string
  phone: string
  about: string
  image: {
    baseUrl: string
    filename: string
    extension: string
  }
}


type TranslatedPost = {
  id: string
  translations: {
    language_id: string
    name: string
    slug: string
    description?: string
  }[]
}

type TranslatedCategory = {
  id: string
  parent_id?: string
  translations: {
    language_id: string
    name: string
    slug: string
    description?: string
    content?: string[]
  }[]
}

interface TranslatedObject {
  translations: {
    language_id: string
    [k: string]: unknown
  }[]
}

type InferTranslation<T> = T extends { translations: (infer L)[] } ? L : never

function unpackTranslation<O extends TranslatedObject> (
  obj: O,
): Omit<O, 'translations'> & InferTranslation<O> {
  const { translations, ...o } = obj
  return {
    ...o,
    ...translations[0] as InferTranslation<O>,
  }
}

const post: TranslatedPost = {
  id: '1',
  translations: [{
    language_id: 'es_ES',
    name: 'Zapatillas Adidas',
    slug: 'zapatillas-adidas',
  }],
}

const category: TranslatedCategory = {
  id: '123',
  translations: [{
    language_id: 'es_ES',
    name: 'Calzado',
    slug: 'calzado',
  }],
}

const postResult = unpackTranslation(post)
const postCategory = unpackTranslation(category)

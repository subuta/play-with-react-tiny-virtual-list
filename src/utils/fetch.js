import LRU from 'lru-cache'

const cache = new LRU({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1h
})

export default async (url) => {
  if (!cache.has(url)) {
    const result = await window.fetch(url).then(res => res.json())
    cache.set(url, result)
  }
  return cache.get(url)
}

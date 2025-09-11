import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { products } from "../data/products"

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = searchParams.get("search") ?? ""
  const [keyword, setKeyword] = useState(initial)

  useEffect(() => {
    setKeyword(searchParams.get("search") ?? "")
  }, [searchParams])

  const filtered = useMemo(() => {
    const k = (keyword || "").trim().toLowerCase()
    if (!k) return products
    return products.filter(
      p =>
        p.name.toLowerCase().includes(k) ||
        p.description.toLowerCase().includes(k)
    )
  }, [keyword])

  const applySearch = () => {
    const k = keyword.trim()
    if (k) setSearchParams({ search: k })
    else setSearchParams({})
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") applySearch()
  }

  return (
    <div className="container">
      <h2>Tìm kiếm sản phẩm</h2>
      <div className="searchbar">
        <input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Nhập từ khóa, ví dụ: iphone, samsung..."
        />
        <button onClick={applySearch}>Search</button>
      </div>

      <div className="product-list">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p className="price">{p.price.toLocaleString()} VND</p>
            <p>{p.description}</p>
          </div>
        ))}
        {filtered.length === 0 && <p>Không tìm thấy sản phẩm phù hợp.</p>}
      </div>
    </div>
  )
}

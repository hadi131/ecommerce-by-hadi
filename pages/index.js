import Header from "../components/header"
import Products from "../components/products"
import Bestseller from "../components/bestseller"
import Banner from "../components/banner"
export default function Home() {
  return (
    <>
    <Header></Header>
    {/* air buds */}
    <Products></Products>
    <Bestseller></Bestseller>
    {/* smart watches */}
    <Products></Products>
    {/* banner */}
    <Banner></Banner>
    {/* latest mobiles */}
    <Products></Products>

    </>
  )
}

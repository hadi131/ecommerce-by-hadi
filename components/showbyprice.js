import Link from "next/link";
const showbyprice = () => {
  return (
    <>
      <div className="maxWidthBody" style={{ paddingBottom: "20px" }}>
        <h3 className="latest">Show By Price </h3>
        <div className="priceCardGrid">

        <div className="priceCards"><Link href={"/"}>Below Rs. 10,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 10,000 - Rs. 20,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 20,000 - Rs. 30,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 30,000 - Rs. 40,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 40,000 - Rs. 50,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 50,000 - Rs. 70,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Rs. 70,000 - Rs. 90,000</Link></div>
        <div className="priceCards"><Link href={"/"}>Above Rs. 90,000</Link></div>
        </div>
      </div>
    </>
  );
};

export default showbyprice;

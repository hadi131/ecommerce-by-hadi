
const warrentycard = () => {
  return (
    <>
      <div className="warrentyBar">
        <div >
          <img src="/images/feature-approved.jpg" alt="" />
          <div>

          <p>PTA Approved</p>
          <p style={{paddingTop:"10px",color:"gray"}}>Mobile Phone</p>
          </div>
        </div>
      
        <div >
          <img style={{marginLeft:"18px"}} src="/images/feature-warranty.jpg" alt="" />
          <div>

          <p>1 Year</p>
          <p style={{paddingTop:"10px",color:"gray"}}>Brand Warrenty</p>
          </div>
        </div>
        <div >
          <img src="/images/feature-shipping.jpg" alt="" />
          <div>

          <p>48hr Delivery</p>
          <p style={{paddingTop:"10px",color:"gray"}}>Open Parcel</p>
          </div>
        </div>
      
        <div >
          <img src="/images/feature-delivery.jpg" alt="" />
          <div>

          <p>Free Delivery</p>
          <p style={{paddingTop:"10px",color:"gray"}}>All Over Pakistan</p>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default warrentycard

import Link from "next/link";
const footer = () => {
  return (
    <>
      <div className="footerMain">
        <div className="maxWidthBody" style={{ paddingBottom: "20px" }}>
        <div className="footerGrid">

          <div className="footerNav">
            <Link href={"/"} className="firstLink">Edify</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>press and Blogs</Link>
            <Link href={"/"}>Terms and Condition</Link>
          </div>
          <div className="footerNav">
            <Link href={"/"} className="firstLink">Customer Service</Link>
            <Link href={"/"}>Help Center</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Installments Plan</Link>
            <Link href={"/"}>E-Warranty Activation</Link>
          </div>
          <div className="footerNav">
            <Link className="firstLink" href={"/"}>Secure Payments Methods</Link>
            <img src="https://static.priceoye.pk/images/payment_method.svg" alt="" />
            <img className="googlePlay" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
          </div>
        </div>

        </div>
      </div>
        <div className="footerBar">
        <div className="maxWidthBody" >
        <div className="barGrid">

            <div className="barLogo">
                Edify.pk
            </div>
            <div className="barIcons">
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>            </div>
        </div>
        </div>
</div>
    </>
  );
};

export default footer;

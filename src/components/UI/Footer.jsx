import { MdPlace } from "react-icons/md";
import footerData from "../../api/FooterApi"
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
function Footer() {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />

  }
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerData.map((curData, index) => {
          const {icon, title, details} = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>)
        })}
      </div>
    



    </footer>
  )
}
export default Footer
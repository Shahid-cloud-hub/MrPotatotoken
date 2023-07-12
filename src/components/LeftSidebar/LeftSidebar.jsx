import { Container } from "./LeftSidebarStyle";
import { Link } from "react-router-dom";
import { MenuData } from "../../assets/data/LeftSidebar";
import { useLocation } from "react-router-dom";

const SidebarItems = (props) => {
  const location = useLocation();
  // eslint-disable-next-line react/prop-types
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      {props.imgIcon && (
        <div
          className={`sidebar__item-inner ${active}`}
          style={{ justifyContent: props?.style }}
        >
          {props.imgIcon && (
            <img
              src={props.imgIcon}
              // style={{ transform: props?.trans }}
              alt={props.imgTitle}
            />
          )}
          <span>{props.title}</span>
          {props.imgIcon2 && (
            <img
              src={props.imgIcon2}
              style={{ transform: props?.trans }}
              alt=""
            />
          )}
          {props.imgIcon3 && <img src={props.imgIcon3} alt="" />}
        </div>
      )}
      {props.data && (
        <div className="cobine-menu-items">
          {props?.data?.map((item, index) => (
            <>
              <Link to={item?.route} key={index}>
                <div
                  className={`item-box`}
                  style={
                    (location?.pathname === "/faq" && index === 0) ||
                    (location?.pathname === "/roadmap" && index === 1)
                      ? { border: "1px solid #f4cd68", color: "#f4cd68" }
                      : {}
                  }
                >
                  <div>
                    <img src={item?.imgIcon} alt={item?.imgTitle} />
                  </div>
                  <span>{item?.title}</span>
                </div>
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

const LeftSidebar = () => {
  const location = useLocation();
  const activeItems = MenuData.findIndex(
    (item) => item?.route && item?.route === location?.pathname
  );

  return (
    <Container>
      {MenuData?.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItems
            title={item.title}
            video={item.video}
            imgIcon={item.imgIcon}
            imgIcon2={item.imgIcon2}
            imgIcon3={item.imgIcon3}
            active={index === activeItems}
            data={item?.data}
            style={item?.style}
            trans={item?.trans}
          />
        </Link>
      ))}
    </Container>
  );
};

export default LeftSidebar;

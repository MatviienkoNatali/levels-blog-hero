import React,{ useState }  from "react";
import * as style from "./listLink.module.scss";
import {Link} from "gatsby";


const listLinks = ["All", "mental health", "metabolic basics", "nutrition", "personal stories", "physical fitness", "ultimate guides"]

const ListLink = () => {
    const [active, setActive] = useState(null)

    return (
        <div className={style.listLink}>
            <div className="container">
                <div className="wrap-list">
                    <ul className="list">
                        {listLinks.map((item) => {
                            return (
                                <Link to={"./"}
                                      key={item.id}
                                      onClick={() => setActive(item)}
                                      className={`list-item ${active == item && 'active'}`}
                                >
                                    <li>{item}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListLink

import React, {useEffect, useState} from "react";
import * as style from "./listLink.module.scss";
import {graphql, Link, useStaticQuery} from "gatsby";

const ListLinks = ['All', 'mental health', 'metabolic basics', 'nutrition', 'personal stories', 'physical fitness', 'ultimate guides']
const createUrl = (item) => { return item.replace(/ /g,"_") }

const ListLink = () => {
  //   const data = useStaticQuery(graphql`
  //   query {
  //     allWpCategory {
  //       nodes {
  //         link
  //         name
  //       }
  //     }
  //   }
  // `);

    // const category = data?.allWpCategory.nodes;
    const [active, setActive] = useState(null)
    useEffect(() => {

        const search = window.location?.search;
        if (search){
            setActive(search.replace("?category=", ""))
        } else{
            setActive("All")
        }
    }, [] )

    return (
        <div className={style.listLink}>
            <div className="container">
                <div className="wrap-list">
                    <ul className="list">
                        {ListLinks.map((item, index) => {
                            // item = item.name;
                            return (
                                <Link to={"?category=" + createUrl(item)}
                                      key={index}
                                      onClick={() => setActive(createUrl(item))}
                                      className={`list-item ${active === createUrl(item) ? 'active' : ''} `}
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

export default ListLink;

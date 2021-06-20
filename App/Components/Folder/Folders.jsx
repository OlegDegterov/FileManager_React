import React from 'react'
import s from "./Folders.module.css";
import Folder from "./Folder";



const Folders = (props) => {
    return (
            <div className={s.folder}>
                {
                    (props.data.children)
                        ? props.data.children.map((content) => <Folder key={content.id}
                                                                       title={content.title}
                                                                       id={content.id}
                                                                       getFolder={props.getFolder}
                                                                       children={content.children}
                                                                       folder={props.folder}/>)
                        : ''
                }
            </div>
    )
};
export default Folders;
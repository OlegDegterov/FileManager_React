import React, {useState} from 'react'
import s from "./Folder.module.css";




const Folder = (props) => {
    const [hidden, setHidden] = useState(true);


    console.log((props.folder
        .filter(obj => Object.values(obj)[0] === props.id))
        .map(item => item.children)
        .flat()
        .filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i))

    return <div>

        {(props.children)
            ? <div className={s.container}>
                <button
                    className={s.preloader} onClick={() => {
                    props.getFolder(props.id);
                    setHidden(!hidden);
                }}>>
                </button>
                <div className={s.folderB}>{props.title}</div>
            </div>
            : <div className={s.folder}>{props.title}</div>}
        {


            ((props.folder
                .filter(obj => Object.values(obj)[0] === props.id))
                .map(item => item.children)
                .flat()
                .filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
                .map(item => <div className={s.item} hidden={hidden} key={item.id}>
                    {
                        (item.children)
                            ? <div className={s.container}>
                                <button
                                    className={s.preloader} onClick={() => {
                                    props.getFolder(item.id);
                                    console.log((item.id))
                                }}>>
                                </button>
                                <div className={s.folderB}>{item.title}</div>
                            </div>
                            : <div className={s.folder}>{item.title}</div>
                    }
                </div>))
        }
    </div>

}
export default Folder;
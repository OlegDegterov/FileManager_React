import React from 'react'
import Folders from "./Folders";
import {connect} from "react-redux";
import ReducerF, {getDataIdThunkCreator, getDataThunkCreator} from "../../Redux/folderReducer";
import FolderClass from "./FolderClass";

let mapStateToProps = (state) =>{
    return {
        data:state.ReducerF,
        folder:state.ReducerF.children
    }
}

const FolderContainer = connect(mapStateToProps,{getDataThunkCreator, getDataIdThunkCreator})(FolderClass);

export default FolderContainer;
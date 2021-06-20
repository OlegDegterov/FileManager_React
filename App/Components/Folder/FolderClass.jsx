import React from 'react'
import Folders from "./Folders";



class FolderClass extends React.Component {
    componentDidMount() {
        this.props.getDataThunkCreator();
    }

    render() {

            return (
        <div>
            <Folders  data={this.props.data.data} folder={this.props.folder} getFolder={this.props.getDataIdThunkCreator}/>
        </div>
            )
    }
}

export default FolderClass;
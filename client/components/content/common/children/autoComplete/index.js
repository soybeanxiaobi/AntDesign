import React from 'react'

import { AutoComplete } from 'antd'

export default class AutoCompleteComp extends React.Component{

    render(){
        return(
            <div className="autoCompleteWried">
                <div className="demo">
                    <div className="demo1">
                        <AutoComplete>
                            

                        </AutoComplete>

                    </div>

                </div>
            </div>
        )
    }
}

module.exports = AutoCompleteComp;
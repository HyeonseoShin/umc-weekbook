import React from "react";

export function Ad(props)
{
    if (!props.clicktf)
    {
        return null;
    }

    return(
        <div>
            <img>
                style={{width: "100vw"}} src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff1912130-0409-4e90-a90f-6091ae253e73%2Ff0e6efc3-b621-4fde-87ab-4cd4a7af3e38%2FUntitled.svg?table=block&id=245ca24a-408d-463a-98e3-0199199a0691&spaceId=f1912130-0409-4e90-a90f-6091ae253e73&userId=51a3da90-a74d-4291-9202-4e5b4a9c8d30&cache=v2" alt="logo"
            </img>
        </div>
    );
}

export default class Page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {click: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick()
    {
        this.setState((state) => (
                {
                    click: !state.click,
                }
            )
        );
    }

    render()
    {
        return (
            <div>
                <Ad>
                    clicktf = {this.state.click}
                </Ad>

                <button onClick = {this.handleToggleClick} > 
                {
                    this.state.click ? "광고 안 보기" : "광고 보기"
                }
                </button>
            </div>
        );
    }
}
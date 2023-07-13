import React ,{Component} from "react";

class UserGreeting extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isLoggedIn : true
        };
    }

    render()
    {
        return (
            this.state.isLoggedIn?
            (<div>Welcome Yashraj</div>):
            (<div>Welcome Guest</div>)
        );

        ///////////////////////////////////////////////////////////////////////
        /* let message;

        if(this.state.isLoggedIn)
        {
            message = <div>Welcome Yashraj</div>;
        }
        else
        {
            message = <div>Welcome Guest</div>;
        }
        
        return (
            <div>
                {message}
            </div>
        ) */
        ///////////////////////////////////////////////////////////////////////

        /* if(this.state.isLoggedIn)
        {
            return (
                <div>
                    Welcome Yashraj
                </div>
            );
        }
        else
        {
            return (
                <div>
                    Welcome Guest
                </div>
            );  
        } */

        ///////////////////////////////////////////////////////////////////////
        /* return (
            <div>
                <div> Welcome Yashraj </div>
                <div> Welcome Guest </div>

            </div>
        ); */
        ///////////////////////////////////////////////////////////////////////
    }
}

export default UserGreeting;
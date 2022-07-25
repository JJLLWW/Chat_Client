import React from 'react'
import { gql } from '@apollo/client'
import { useSubscription, useMutation, useQuery } from '@apollo/client'
import { TextField, Button } from '@mui/material'

const SUBSCRIPTION = gql`
    subscription MySub {
        TestSubscription
    }
`

const MSG_QUERY = gql`
    query Q {
        doNothing
    }
`

const SEND_MSG = gql`
    mutation M($text: String!) {
        SendMsg(text: $text) {
            success
        }
    }
`

const MSG_SUBSCRIPTION = gql`
    subscription RealSub {
        MsgSub {
            text
        }
    }
`

class Messages extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Messages {!this.props.loading && String(this.props.data.doNothing)}</h1>
            </div>
        )
    }
    componentDidMount() {
        this.props.doSubscribe()
    }
}

export default function Chat() {
    const { subscribeToMore, ...result } = useQuery(
        MSG_QUERY, {}
    )
    const [SendMut, { }] = useMutation(SEND_MSG)
    const { data, loading } = useSubscription(
        MSG_SUBSCRIPTION,
        {}
    )
    return (
        // this is terrible, better way?
        <div>
            <Button onClick={() => { SendMut({ variables: { text: "Hello World" } }) }}>Send Msg</Button>
            <h1>Last Message: {!loading && data.MsgSub.text}</h1>
            <Messages {...result} doSubscribe={() => {
                subscribeToMore({
                    document: MSG_SUBSCRIPTION,
                    variables: {},
                    updateQuery: (prev, { subscriptionData }) => {
                        console.log("called")
                        if (!subscriptionData.data) return prev
                        return { doNothing: "masdkmsalkmdsakmdlkm" }
                    }
                })
            }} />
        </div>
    )
}
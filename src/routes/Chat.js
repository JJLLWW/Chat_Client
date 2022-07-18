import React from 'react'
import { gql } from '@apollo/client'
import { useSubscription } from '@apollo/client'

const SUBSCRIPTION = gql`
    subscription MySub {
        TestSubscription
    }
`

export default function Chat() {
    const { data, loading } = useSubscription(
        SUBSCRIPTION,
        {}
    )
    return (
        <div>
            <h1>CHAT {data}</h1>
        </div>
    )
}
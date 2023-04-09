import React from 'react'
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function User() {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users/1', fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    return <div>hello {JSON.stringify(data)}!</div>;
}

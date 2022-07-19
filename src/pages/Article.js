import { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data:article, isLoading, error} = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if(error) setTimeout(() => history.push('/'), 3000)
    }, [error])

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{`${error}. Redirecting in 3 seconds...`}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
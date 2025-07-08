import { useState } from "react"

export function TwitterFollowCard ({userName = 'unknown', name = 'unknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`/images/${userName}.jpg`}
                alt="La Imagen de Gerardo" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <a className="tw-followCard-infousername" target='_blank' href={`https://x.com/${userName}`}>{`@${userName}`}</a>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-buttonText">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
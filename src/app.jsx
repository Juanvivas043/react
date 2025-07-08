import './TwitterFollowCard.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

function App () {

    const users = [
        {
            userName: 'GVillarrowl',
            initalIsFollowing: false,
            name: 'Gerardo Villarrowl'
        },
        {
            userName: 'yailitv',
            initalIsFollowing: false,
            name: 'Yailit Villarroel'
        },
        {
            userName: 'timkojak',
            initalIsFollowing: false,
            name: 'Agustin Villarroel'
        },
        {
            initalIsFollowing: false
        },
    ]

    return(
        <section className='App'>
            <h1 className='tw-follow-text'>Personas que quizás conozcas</h1>
            {users.map(({userName, name, initalIsFollowing}) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    name={name}
                    initialIsFollowing={initalIsFollowing}
                />
            ))}
        </section>
        
    )    
}
export default App;
// Componente reutilizable
// export function TwitterFollowCard ({formatUserName, userName='unknown', children='unknown', isfollowing}) {
//     // NO hacer lo siguiente:
//     // const formatedUserName = `@${userName}`;
//     // Las promp deben ser inmutables

//     const buttonFollowText = isfollowing ? 'Siguiendo' : 'Seguir';
//     const buttonClassName = isfollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button';
    
//     return (
//         <article className='tw-follow-card'>
//             <header className='tw-follow-card-header'>
//                 <img 
//                     alt="Avatar" 
//                     className='tw-follow-card-avatar'
//                     src={`https://unavatar.io/${userName}`}
//                 />
//                 <div className='tw-follow-card-info'>
//                     <strong>{children}</strong>
//                     <span className='tw-follow-card-info-username'>{formatUserName(userName)}</span>
//                 </div>
//             </header>
//             <aside>
//                 <button className={buttonClassName}>
//                     {buttonFollowText}
//                 </button>
//             </aside>
//         </article>
//     )
// }

// Estados y hooks...
import { useState } from 'react';
export function TwitterFollowCard ({userName='unknown', children='unknown', initialIsFollowing}) {
    // const state = useState(initialIsFollowing); // la función useState devuelve un array
    // // En la primera posición se guarda el valor del estado
    // // en la segunda posición la función para cambiar dicho estado
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];
    // // Las lineas anteriores equivalen a esta única línea:
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const buttonFollowText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    // El estado de cada componete es individual, no se comparte
    // Esto se conoce como Estado Interno, ya que está a nivel de cada uno de los elementos que crea el componente

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    alt="Avatar" 
                    className='tw-follow-card-avatar'
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-info-username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-follow-card-txtbtt-follow'>{buttonFollowText}</span>
                    <span className='tw-follow-card-txtbtt-stop-following'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
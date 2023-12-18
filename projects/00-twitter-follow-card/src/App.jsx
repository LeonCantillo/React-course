// // Estilos en línea ... ======================
// // export function App () {
//     return (
// //      Los estilos se deben dar como objetos, no como cadenas de texto
// //      y las claves deben estar en camellCase sin guiones.
//         <article style={{display: 'flex', alignItems: 'center'}}>
//             <header>
//                 <img alt="Avatar" src="https://unavatar.io/midudev"/>
//                 <div>
//                     <strong>Miguel Ángel Duran</strong>
//                     <span>@midudev</span>
// // ...


// // Estilos importados
// // Clases con jsx
// import './App.css';
// export function App () {
//     return (
//         <article className='tw-follow-card'>
//             <header className='tw-follow-card-header'>
//                 <img 
//                     alt="Avatar" 
//                     className='tw-follow-card-avatar'
//                     src="https://unavatar.io/midudev"
//                 />
//                 <div className='tw-follow-card-info'>
//                     <strong>Miguel Ángel Duran</strong>
//                     <span className='tw-follow-card-info-username'>@midudev</span>
//                 </div>
//             </header>
//             <aside>
//                 <button className='tw-follow-card-button'>
//                     seguir
//                 </button>
//             </aside>
//         </article>
//     )
// }

// Componente reutilizable
// import './App.css';
// import { TwitterFollowCard } from './TwitterFollowCard.jsx';
// export function App () {
//     const formatUserName = (userName) => `@${userName}`;

//     // También se pueden pasar las propiedades de cada promp de la siguiente manera:
//     // Se considera mala práctica
//     const midudev = {formatUserName:{formatUserName}, userName:'midudev', isfollowing:true};
    
//     return (
//         <section className='twitter-card'>
//             {/* <TwitterFollowCard 
//                 formatUserName={formatUserName}
//                 isfollowing 
//                 userName='midudev' 
//                 name='Miguel Ángel Durán' 
//             /> */}

//             {/* Usando Children */}
//             <TwitterFollowCard 
//             formatUserName={formatUserName}
//             isfollowing 
//             userName='midudev'>
//                 Miguel Ángel Duran
//             </TwitterFollowCard>

//             <TwitterFollowCard
//             formatUserName={formatUserName}
//             isfollowing={false}
//             userName="pheralb">
//                 Pablo Hernandez
//             </TwitterFollowCard>
            
//             <TwitterFollowCard
//             formatUserName={formatUserName}
//             isfollowing
//             userName="ellonmusk">
//                 Ellon Musk
//             </TwitterFollowCard>
            
//             {/* Se puede tener un componente dentro de otro componente */}
//             <TwitterFollowCard
//             formatUserName={formatUserName}
//             isfollowing={false}
//             userName="ellonmusk">
//                 <TwitterFollowCard
//                 formatUserName={formatUserName}>
//                 </TwitterFollowCard>
//             </TwitterFollowCard>

//             {/* Se pueden mostrar las promp de la siguiente manera: */}
//             {/* Se considera mala práctica. */}
//             {/* <TwitterFollowCard {...midudev}>
//                 Miguel Ángel Duran
//             </TwitterFollowCard> */}
//         </section>
//     );
// }


// Hooks
// import './App.css';
// import { TwitterFollowCard } from './TwitterFollowCard.jsx';
// export function App () {
//     return (
//         <section className='twitter-card'>
//             <TwitterFollowCard
//             initialIsFollowing={true}
//             userName='midudev'>
//                 Miguel Ángel Duran
//             </TwitterFollowCard>

//             <TwitterFollowCard
//             initialIsFollowing={true}
//             userName="pheralb">
//                 Pablo Hernandez
//             </TwitterFollowCard>
            
//             <TwitterFollowCard
//             userName="ellonmusk">
//                 Ellon Musk
//             </TwitterFollowCard>
//         </section>
//     );
// }

// Renderizar lista de objetos
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Duran',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pedro Hernandez',
        isFollowing: false,
    },
    {
        userName: 'ellonmusk',
        name: 'Ellon Musk',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas Chein',
        isFollowing: false,
    }
];

export function App () {
    return (
        <section className='twitter-card'>
            {users.map(user => {
                const {userName, name, isFollowing} = user;
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </section>
    );
}
// Archivo q envuelve todos los POSTS
export default function PostsLayout({ children }) {
    return (
        <div>
            <marquee style={{ background: '#f54254', color: 'yellow' }}>Los mejores Post en NEXT JS</marquee>
            <small>Home &bull; Post</small>
            <h1>Este es el LAYOUT de los post</h1>
            {children}
        </div>
    );
}

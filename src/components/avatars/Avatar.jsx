import "./Avatar.css"

const user = {
    name: "Fran",
    imageUrl: "https://preview.redd.it/0j8gr481gvl61.jpg?width=568&format=pjpg&auto=webp&s=25c3b14c76c3338312be161c47f385ce7367277c",
    imageSize: 50,
};

export default function Avatar() {
    return (
        <>  
            <h2>{user.name}</h2>
            <img 
                className="avatarStyle"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
            />
        </>
    )
}
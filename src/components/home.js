const Home = () => {

const name = "Rohit";
const hobby = " Pubg & Gaming"
const languages = " Python & React"
const getDetails = () => {
    return<div>
        <h1>Name : {name}</h1>
        <h2>Hobby :{hobby}</h2>
        <h3>Languages :{languages}</h3>
    </div>
}


    return (
        <div>
            <h1>Hello Tag</h1>
            <h1>Hello Tag Name</h1>
            <h2>My Name is {name}</h2>
            {getDetails()}
        </div>
    )
}

export default Home;
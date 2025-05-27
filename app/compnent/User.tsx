import axios from "axios";

export default async function User() {
    const response = await axios.get("https://coffee.alexflipnote.dev/random.json")
    const info = response.data;
    console.log(info.data)
    return (
        <>
        <div className="h-screen w-screen flex flex-col items-center">
            <img className="w-100 h-100 rounded-2xl" src={info.file} alt="Coffee" />
        </div>
        </>
    )
}
import SearchBar from "./SearchBar";


export default function Nav({onSearch}) {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}
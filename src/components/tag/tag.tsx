interface TagProps {
    tag_name: string;
}

//список тегов
export default function Tag({ tag_name }: TagProps) {
    function handleTag() {
        alert(`Переход к событиям с тегом "${tag_name}"`);
    }
    return (
        <span onClick={handleTag} className="tag badge bg-info">{tag_name}</span>
    );
}
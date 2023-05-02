interface TagProps {
    tag_name: string;
}

//список тегов
export default function Tag({ tag_name }: TagProps) {
    function handleTag() {
        alert(`Переход к событиям с тегом "${tag_name}"`);
    }
    return (
        <div onClick={handleTag} className="rounded-full cursor-pointer select-none place-self-start text-white text-center w-[96px] px-2 h-5 text-sm bg-blue-800">{tag_name}</div>
    );
}
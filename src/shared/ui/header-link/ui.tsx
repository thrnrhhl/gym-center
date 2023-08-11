
type HeaderLinkProps = {
    name: string
};
export function HeaderLink({ name }: HeaderLinkProps) {
    return (
        <a href="/" className="text-[16px] text-[#fff]">{name}</a>
    )
}
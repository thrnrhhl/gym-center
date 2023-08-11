type IconArrowRightProps = {
    fill?: string;
};
export const IconArrowRight = ({ fill = "#fff" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
        viewBox="0 0 22 22"
    >
        <path
            fill={fill}
            d="M16.563 12.333H.333V9.667h16.23L9.41 2.515 11.296.629 21.666 11l-10.37 10.372-1.885-1.886 7.152-7.152z"
        ></path>
    </svg>
);
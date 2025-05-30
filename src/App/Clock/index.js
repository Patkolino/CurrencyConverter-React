import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Today is
            {" "}
            {formatDate(date)}
        </Wrapper>
    );

};

export default Clock;
import Error from "@/component/error/Index";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
    title: "404 error || Page not found in WOW",
};

const NotFoundPage = () => {
    return (
        <Wrapper>
            <Error />
        </Wrapper>
    )
}

export default NotFoundPage;

import { useSelector } from "react-redux";

const AccountPage = () => {
    const token = useSelector((state) => state.user.token);
    const username = useSelector((state) => state.user.username);
    if (token) {
        return (
            <>
                Account
            </>
        )
    } else {
        return (
            <>
                You are not logged in!
            </>
        )
    }
}

export default AccountPage;
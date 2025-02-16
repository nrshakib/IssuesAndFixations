// Remove Access Token and other items from local storage on Logout button Click

const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
};

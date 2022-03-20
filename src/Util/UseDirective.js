export const clickOutSide = (node) => {
    console.log(node)
    document.addEventListener(
        "click",
        (e) => {
            if (!node.contains(e.target)) {
                node.dispatchEvent(new CustomEvent("outClick"));
            }
        },
        true,
    );

    return {
        destroy() {
            document.removeEventListener("click", null, true);
        },
    };
};

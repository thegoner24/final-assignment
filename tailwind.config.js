module.exports = {
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    .animate-scroll {
        animation: scroll 20s linear infinite;
        display: flex;
        white-space: nowrap;
    }
}
// /* Animation for continuous scroll */
// @keyframes scroll {
//     0% {
//         transform: translateX(0);
//     }
//     100% {
//         transform: translateX(-50%);
//     }
// }
// .animate-scroll {
//     animation: scroll 20s linear infinite;
//     display: flex;
//     white-space: nowrap;
// }
//
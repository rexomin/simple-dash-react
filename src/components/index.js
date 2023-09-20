/* 
    Simplify your imports and declutter your codebase with this convenient file!
    Exporting all components from this folder allows you to import them collectively in other files.

    No more importing components one by one! 🚀
    Say goodbye to:
    import BtnIcon from "../components/BtnIcon";
    import BtnPrimary from "../components/BtnPrimary";

    Embrace this elegant syntax instead:
    import { BtnIcon, BtnPrimary, BtnWithIcon } from "../components";

    This approach gracefully leverages the module system,
    ensuring components remain encapsulated and not truly global.
    It's widely recommended for a cleaner, more maintainable, and performant codebase.

    Happy coding! 🎉💻
*/

export { default as Avatar } from './Avatar';
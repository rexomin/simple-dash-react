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
export { default as AvatarStack } from './AvatarStack';
export { default as AvatarWithName } from './AvatarWithName';
export { default as Badge } from './Badge';
export { default as Btn } from './Btn';
export { default as IconText } from './IconText';
export { default as Card } from './Card';
export { default as MicroCard } from './MicroCard';
export { default as Metric } from './Metric';
export { default as ProgressBar } from './ProgressBar';
export { default as Table } from './Table';
export { default as StatisticBox } from './StatisticBox';
export { default as SectionCard } from './SectionCard';

//inputs
export { default as AuthCode } from './inputs/AuthCode';
export { default as Checkbox } from './inputs/Checkbox';
export { default as Input } from './inputs/Input';
export { default as SelectInput } from './inputs/SelectInput';
export { default as Textarea } from './inputs/Textarea';
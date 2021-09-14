import './SkillsList.css';
interface Props {
    id: string;
    title: string;
    skills: SkillData[];
}
declare const SkillsList: ({ id, title, skills }: Props) => JSX.Element;
export default SkillsList;

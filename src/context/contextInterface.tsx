type ContentType = 'typo' | 'tooltip-icon' | 'icon' | 'mark' | 'href';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Content = string | any;
type Link = string;
interface BaseContent {
    type: ContentType;
    content: Content;
    tooltip?: string;
    link?: Link;
}
type Paragraph = BaseContent[];
export default interface Context {
    title: string;
    content: Paragraph[];
}

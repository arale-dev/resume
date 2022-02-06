export type ContentType = 'typo' | 'mark' | 'tooltip-icon' | 'icon' | 'href';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Content = string;
export type Link = string;
export interface BaseContent {
    type: ContentType;
    content: Content;
    tooltip?: string;
    link?: Link;
}
export type Paragraph = BaseContent[];

export default interface Context {
    title: string;
    content: Paragraph[];
}
export type CoverContext = string[];

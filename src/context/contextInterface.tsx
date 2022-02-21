export type ContentType =
    | 'typo'
    | 'mark'
    | 'tooltip-icon'
    | 'tooltip-typo'
    | 'icon'
    | 'href';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Content = string;
export type Link = string;
export interface BaseContent {
    type: ContentType;
    content: Content;
    tooltip?: string;
    link?: Link;
}
export interface ListContent {
    type: 'list';
    contents: BaseContent[];
}
export type ParagraphContent = BaseContent | ListContent;
export type Paragraph = ParagraphContent[];

export default interface Context {
    title: string;
    content: Paragraph[];
}
export type CoverContext = string[];

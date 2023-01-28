export interface ITabActive {
    title: string;
}

export interface IConstEl {
    varName: string;
    valueColor: "syntax" | "keyword" | "string" | 'default'
}

export interface ICodeLine {
    lineNum: number;
}

export interface IFuncEl {
    funcName: string;
    arg: string;
}
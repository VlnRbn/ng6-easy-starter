export interface TableHeaders {
    columnIdentifier: string;
    columnName: string;
}

export interface ActionsColumn {
    icon: string;
    tooltip: string;
    type: string;
}

export interface TableConfig {
    headers: TableHeaders[];
    data: any[];
    actions?: ActionsColumn[];
}

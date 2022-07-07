export interface PaginationParams {
    _total: number;
}

export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}
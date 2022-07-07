import { City, ListResponse } from "../models";
import axiosClient from "./axiosClient";


export const cityApi = {
    getAll(params: any): Promise<ListResponse<City>> {
        const url = '/cities';
        return axiosClient.get(url, params);
    }
}